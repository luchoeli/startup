import React from 'react';
class MovieList extends React.Component {
    constructor(){
        super();
    }
    render() { 
        let movies = this.props.movies
        return (
            <ul>
                {movies.map(item => <Movie key={item} movie={item}/>)}
            </ul>
          );
    }
}

/*const Movie = (props) =>  <li> {props.movie.name} - {props.movie.author} - {props.movie.duration} </li>;*/
const Movie = (props) => <li> {props.movie} </li>;

export default MovieList;