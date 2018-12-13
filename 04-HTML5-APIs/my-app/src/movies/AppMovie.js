import React, { Component } from 'react';
import './MovieForm'
import MovieForm from './MovieForm';
import MovieList from './MovieList';

class AppMovie extends Component {
    constructor(){
        super()
        this.state = { 
            movies: [{title: 'Titanic', author:'John Perez', year: "1992", duration:"2:57:23"},
                     {title: 'Gladiador', author:'Richard Perez', year: "2334", duration:"2:57:23"},
                     {title: 'Renacido', author:'Lance Perez', year: "2112", duration:"2:57:23"}, ]
        }
        this.addMovie = this.addMovie.bind(this)
    }
    addMovie(movie){   
        console.log(movie)
        
        this.setState({
            movies: [...this.state.movies, movie]
        })
        
    }

    render() {
      return (
        <div className="MovieApp">
            <h2>Crear pelicula</h2>
            <MovieForm onAddMovie={this.addMovie}/>
            <h2>Lista de Peliculas</h2>
            <MovieList movies={this.state.movies}/>
        </div>
      );
    }
  }
  
  export default AppMovie;