import React from 'react';
import EditMovieForm from './editMovieForm';
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
        this.props.onDeleteMovie(e.target.attributes.tittlemovie.value)
        
    }
    
    editarMovie(e){
        e.preventDefault()
        let title = e.target.attributes.title.value
        this.setState({tituloAborrar: title}, function(){
            this.changeMode()
        })
        // no necesariamente se cambie
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
                        <EditMovieForm onEditMovie={this.props.onEditMovie} movie={this.state.movieABorrar} moviedata={this.state.tituloAborrar}/>
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
                        {movies.map((item, index) => <Movie key={index} movie={item} editarla={this.editarMovie} removerla={this.removerMovie}/>)}     
                    </ul>
                    
                </div>
            );
        }
    }
}
const Movie = (props) => <li> 
                            <hr/>
                            <div>
                                <span>{props.movie.title}</span> <br/>
                                <span>{props.movie.author}</span> <br/>
                                <span>{props.movie.year}</span> <br/>
                                <span>{props.movie.duration}</span> <br/>

                                <button 
                                    title={props.movie.title} 

                                    onClick={props.editarla}>
                                    edit 
                                </button> 
                                
                                <button 
                                    tittlemovie={props.movie.title} 
                                    onClick={props.removerla}> 
                                    delete 
                                </button>                             
                            </div>
                        </li>;


export default MovieList;
