const initialState = {
                        movies: [
                                    {title: 'Titanic', author:'John Perez', year: "1992", duration:"2:57:23"},
                                    {title: 'Gladiador', author:'Richard Perez', year: "2334", duration:"2:57:23"},
                                    {title: 'Renacido', author:'Lance Perez', year: "2112", duration:"2:57:23"}, 
                                ]
                    }

const appmovie = (state = initialState, action) => {
    switch (action.type) {
   
        case 'ADD_MOVIE':
            return {
                movies: [...state.movies, action.movie]
            }
        
        case 'REMOVE_MOVIE':
        
            var filtered = state.movies.filter(function(value, index, arr){
                    return state.movies[index].title !== action.movie;
            });
            return({
                movies: filtered
            })
       

        case 'EDIT_MOVIE' :
            let aeditar = action.movie.aEditar
            let values = action.movie.values    
            var index = -1;
            for(var i = 0, len = state.movies.length ;i < len; i++) {
                if (state.movies[i].title === aeditar) {
                    index = i;
                    break; 
                }
            }
            state.movies.splice(index,1,values)
            return({
                movies: state.movies
            })

           
      default:
        return state
    }
  }
  
  export default appmovie
  