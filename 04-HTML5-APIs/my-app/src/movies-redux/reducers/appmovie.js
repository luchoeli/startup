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
            return state.map(

            )
      default:
        return state
    }
  }
  
  export default appmovie
  