class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        if( !this.events[eventName] ) {
            this.events[eventName] = [];
         }
           
         this.events[eventName].push(callback);

         return () => {
            this.events[eventName] = this.events[eventName].filter(eventFn => eventFn !== callback);
          }  
    }

    emit(eventName, data) {
        const event = this.events[eventName];
        if( event ) {
            event.forEach(fn => {
                fn(eventName,data);
            });
        }
    }

    //se desubscribe de una funcion de in evento
    off(eventName, callback) {
        let unsubscribe = this.on(eventName, callback);
        unsubscribe();
    }

    //se desubscribe de todo el evento
    
    offEvent(eventName){
        //FIXME
        //debugger;
        console.log(this.events.length);
        for( var i=0 ; i<this.events.length ; i++){
            console.log(this.events[i]);
            if( this.events[i] == eventName ) {
                delete events[i];
                break;
            }
        }
    }
    
    
}

class Movie extends EventEmitter {
    constructor(name, year, duration){
        super();
        this.title = name;
        this.year = year;
        this.duration = duration;
        this.elenco = [];

        this.on('playMovie', data => {console.log("reproduciendo " + this.title)});
        this.on('playMovie', data => {console.log("reproduciendo2 " + this.title)});
        this.on('pauseMovie', data => {console.log(this.title + ": pausada.")});
        this.on('resumeMovie', data => {console.log("reanudando " + this.title)});

    }

    //methods
    play() {
        this.emit('playMovie', this );
    }

    pause() {
        this.emit('pauseMovie', this);
    }

    resume() {
        this.emit('resumeMovie', this);
    }
}

Movie.prototype.addCast = function(actores){

    //elenco = elenco.concat(actores);
    if (Array.isArray(actores)){
        for ( i=0 ; i < actores.length || actores.length == 0 ; i++ ){
                this.elenco.push(actores[i]);
        }        
    } else {
        this.elenco.push(actores);
    }
}



class Actor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

class Logger{
    log(eventName,info){
        console.log("--- Evento: "+eventName+ " de la pelicula "+ info.title +" disparado.");
    }
}


const johnP = new Actor("John Perez",32);
const peli = new Movie("titanic",1997, "2:57:23");

let logger = new Logger();
peli.on('playMovie', logger.log);

/*
let func =  peli.events["playMovie"];
func = func[0];
peli.off("playMovie", func);
*/
peli.offEvent("playMovie");


/*
Create an object called social, defining the methods share(friendName) and like(friendName) that generates the following output {friendName} likes/share {movieName}.

Then extend a movie with it to have access to this methods.
*/

let social = {
    share(friendName){
        console.log(friendName + " share "+ this.title);
    },
    
    like(friendName){
        
        console.log(friendName + " likes "+ this.title);
    }
};

Object.assign(Movie.prototype,social);