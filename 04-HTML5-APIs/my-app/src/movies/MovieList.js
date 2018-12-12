import React from 'react';
class MovieList extends React.Component {

    render() { 
        let movies = this.props.movies
        return (
            <ul>
                {movies.map((item, index) => <Movie key={index} movie={item}/>)}     
            </ul>
          );
    }
}

/*const Movie = (props) =>  <li> {props.movie.name} - {props.movie.author} - {props.movie.duration} </li>;*/
const Movie = (props) => <li> 
                            <hr/>
                            <span>{props.movie.title}</span> <br/>
                            <span>{props.movie.author}</span> <br/>
                            <span>{props.movie.year}</span> <br/>
                            <span>{props.movie.duration}</span> <br/>
                            <button> edit </button> <br/>
                        </li>;

export default MovieList;