import React, { Component } from 'react';
import './MovieForm'
import MovieForm from './MovieForm';
import MovieList from './MovieList';
class AppMovie extends Component {
    constructor(){
        super()
        this.state = {
            movies: ['titanic', 'gladiador']
        }
    }

    addMovie(){

    }

    render() {
      return (
        <div className="MovieApp">
            <p>HelloWorld</p>
            <MovieForm/>
            <MovieList movies={this.state.movies}/>
        </div>
      );
    }
  }
  
  export default AppMovie;