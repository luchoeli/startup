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
        
    }
    addMovie(movie){         
        this.setState({
            movies: [...this.state.movies, movie]
        })
        
    }

    editMovie(data){
        let aeditar = data.aEditar
        let values = data.values
        var index = -1;
        for(var i = 0, len = this.state.movies.length ;i < len; i++) {
            if (this.state.movies[i].title === aeditar) {
                index = i;
                break; 
            }
        }
        this.state.movies.splice(index,1,values)
        this.setState({
            movies: this.state.movies
        })
    }


    deleteMovie(m){       
        var index = -1;
        for(var i = 0, len = this.state.movies.length ;i < len; i++) {    
            if (this.state.movies[i].title === m) {
                index = i;
                break; 
            }
        }
    
        var lista = this.state.movies;
        var removido = this.state.movies.splice(index,1)
        this.setState({
            movies: lista
        })     
    }

    render() {
      return (
        <div className="MovieApp">
            <h2>Crear pelicula</h2>
            <MovieForm modo="Add movie" onUpdateList={this.addMovie}/>
            <h2>Lista de Peliculas</h2>
            <MovieList movies={this.state.movies} onEditMovie={this.editMovie} onDeleteMovie={this.deleteMovie}/>

        </div>
      );
    }
  }
  
  export default AppMovie;