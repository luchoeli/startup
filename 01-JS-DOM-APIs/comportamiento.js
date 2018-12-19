function init(){
   
   showHidden();
   agregarListeners();
   buscarRepositorios();
   hacerMatriz();
}

function showHidden(){
    var sections = Array.from(document.getElementsByClassName("hidden"));
    sections.map(section => section.style.opacity= 1)
    
}

function agregarListeners(){
    var btn = document.getElementById("jokeButton");
    if (btn){
        btn.addEventListener("click", function(){
            const Http = new XMLHttpRequest();
            const url='http://api.icndb.com/jokes/random';
            Http.open("GET", url);
            Http.send();
            Http.onreadystatechange = function(){
                if (Http.readyState == 4 && Http.status == 200) {
                    try {
                        var json = JSON.parse(Http.responseText);
                    } catch(err) {
                        console.log(err.message + " in " + Http.responseText);
                        return;
                    } 
                    document.getElementById("joke").innerHTML = json.value.joke;
                } else {
                    if (Http.status >= 500 && Http.status <= 511){
                        var section = document.getElementsByClassName("hidden");
                        section.style.backgroundColor = red;
                    }
                }
            }; 
        });
    }
    else{
        alert("error");
    }
}

function serchRepo(){
    
    const Http = new XMLHttpRequest(); 
    var input = document.getElementById("inputParameter").value;
    var urlFinal = "https://api.github.com/search/repositories?q=topic:";
    urlFinal = urlFinal.concat(input);
    urlFinal= encodeURI(urlFinal);
    console.log(urlFinal)
    Http.open("GET", urlFinal);
    Http.send();
    Http.onreadystatechange = function(){
        
        if (Http.readyState == 4 && Http.status == 200) {
            try {
                var json = JSON.parse(Http.responseText);
            } catch(err) {
                console.log(err.message + " in " + Http.responseText);
                return;
            } 
            json.items.forEach(jsonToListItem);
           

        } else {
            if (Http.status >= 500 && Http.status <= 511){
                var section = document.getElementsByClassName("hidden");
                section.style.backgroundColor = red;
            }
        }
    }

}

function jsonToListItem(item){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.id + ":  "+ item.name + " "+ item.owner.html_url));
    var luAux = document.getElementById("lista");
    luAux.appendChild(li);
}

function buscarRepositorios(){
    var btn = document.getElementById("repoSearchButton");
    if (btn){
        btn.addEventListener("click", serchRepo);
    }else{
        alert("Button repo not found");
    }
}

function crearMatriz(filas,columnas){
    var matrix = [];
    for(var i=0; i<filas; i++) {
        matrix[i] = [];
        for(var j=0; j<columnas; j++) {
            matrix[i][j] = Math.random();
        }
    }
    return matrix;
}

function hacerMatriz(){
    var filas = prompt("ingrese filas");
    var columnas = prompt("ingrese columnas");
    var matriz = crearMatriz(filas,columnas);
    generate_table(matriz);

}

function generate_table(matriz) {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // creating all cells
    for (var i = 0; i < matriz.length; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < matriz[i].length; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(matriz[i][j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }
