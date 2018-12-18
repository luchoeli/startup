import React from "react";
import MovieForm from './MovieForm'
import MovieList from './MovieList';

export default function AppMovie() {
    return (
       <div className="MovieApp">
            <h2>Crear pelicula</h2>
            <MovieForm modo="Add movie"/>
            <h2>Lista de Peliculas</h2>
            <MovieList />
        </div>
    );
  }
           