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
        this.editMovie = this.editMovie.bind(this)
        this.deleteMovie = this.deleteMovie.bind(this)
        this.buscarMovie = this.buscarMovie.bind(this)
    }
    addMovie(movie){   
        console.log(movie)
        
        this.setState({
            movies: [...this.state.movies, movie]
        })
        
    }

    editMovie(movie){
        console.log("editando movie")
    }

    buscarMovie(title, titu){
        if (this.title === titu ) {
            console.log("se")
        }
        return (this.title === titu )
    }
    deleteMovie(m){
        console.log(m.data)
        
        var index = -1;
        for(var i = 0, len = this.state.movies.length ;i < len; i++) {
            console.log(this.state.movies[i].title)
            if (this.state.movies[i].title === m.data) {
                index = i;
                break; 
            }
        }
        //console.log(this.state.movies.indexOf(index))
        
        
        this.setState({
            movies: [this.state.movies.splice(this.state.movies.indexOf(index),1)]
        })
        console.log("borrando movie")
        
    }

    render() {
      return (
        <div className="MovieApp">
            <h2>Crear pelicula</h2>
            <MovieForm onUpdateList={this.addMovie}/>
            <h2>Lista de Peliculas</h2>
            <MovieList movies={this.state.movies} onEditMovie={this.editMovie} onDeleteMovie={this.deleteMovie}/>

        </div>
      );
    }
  }
  
  export default AppMovie;