const initialState = {
                        movies: []
                    }

const appmovie = (state = initialState, action) => {
    switch (action.type) {
   
        case 'ADD_MOVIE':
            return {
                movies: [...state.movies, action.movie]
            }
        
        case 'REMOVE_MOVIE':
            return state.map(

            )

        case 'EDIT_MOVIE' :
            return state.map(

            )
        /*
            case 'ADD_TODO':
                return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
                ]

            case 'TOGGLE_TODO':
                return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
                )
        */
      default:
        return state
    }
  }
  
  export default appmovie
  