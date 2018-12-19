import React from 'react';
import { connect } from 'react-redux'
import { deleteMovieAction, editMovieAction } from '../actions'
import MovieForm from './MovieForm';
import MovieListItem from './MovieListItem'

class MovieList extends React.Component {
    constructor(){
        super()
        this.state = {  tipoFiltro: "all",
                        tituloAborrar:" ",
                        movieABorrar: " ",
                        modo: "listando"
                     }
        this.removerMovie = this.removerMovie.bind(this)
        this.changeMode = this.changeMode.bind(this)
        this.editarMovie = this.editarMovie.bind(this)
    }

    changeMode(){
        var mode = this.state.modo
        if (mode === "editando"){
            this.setState({modo: "listando"})
        }else{
            this.setState({modo: "editando"})
        }

    }
    filter(e){
        this.setState({filter: e.target.value})
    }

    tipoFiltro(e){
        this.setState({tipoFiltro: e.target.value})
    }

    removerMovie(e){
        e.preventDefault();
        this.props.deleteMovie(e.target.attributes.tittlemovie.value)
    }
    
    editarMovie(e){
        e.preventDefault()
        let title = e.target.attributes.title.value
        this.setState({tituloAborrar: title}, function(){
            this.changeMode()
        })
    }

    render() { 
        
        let movies = this.props.movies;
        let filt = this.state.tipoFiltro;
        if (this.state.filter){
            
            if (filt === "all"){
                movies = movies.filter( movie => movie.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
                                                 movie.author.toLowerCase().includes(this.state.filter.toLowerCase()) ||
                                                 movie.year.toLowerCase().includes(this.state.filter.toLowerCase())
              )
            }else{
                movies = movies.filter( movie => movie[filt].toLowerCase().includes(this.state.filter.toLowerCase()))
            }
            
        }
        if (this.state.modo === "editando"){
            return(
                    <div>
                        <p>Editing {this.state.tituloAborrar}</p> 
                        <MovieForm modo={"Edit movie"} movieOriginal={this.state.tituloAborrar} changeMode={this.changeMode}/>
                        <button onClick={this.changeMode}> Volver a la lista </button>
                    </div>
            );
        }else{
            return (
                <div>
                    <label>Search movie by </label>
                    <select name="filtro" id="filtro" onChange={this.tipoFiltro.bind(this)}>
                        <option value="all">all</option>
                        <option value="title">title</option>
                        <option value="author">author</option>
                        <option value="year">year</option>            
                    </select>
                    <input type="text" onChange={this.filter.bind(this)}/>
                    <ul>
                        {movies.map((item, index) => <MovieListItem key={index} movie={item} editarla={this.editarMovie} removerla={this.removerMovie}/>)}     
                    </ul>
                    
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        movies: state.appmovie.movies
    }
}
  
  const mapDispatchToProps = dispatch => ({
    deleteMovie: movie => dispatch(deleteMovieAction(movie)),
    editMovie: movie  => dispatch(editMovieAction(movie))  
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieList)
  