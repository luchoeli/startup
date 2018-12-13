import React from 'react';
import EditMovieForm from './editMovieForm';
class MovieList extends React.Component {
    constructor(){
        super()
        this.state = { tipoFiltro: "all",
                        tituloAborrar:""
                     }
        this.removerMovie = this.removerMovie.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    filter(e){
        this.setState({filter: e.target.value})
    }

    tipoFiltro(e){
        this.setState({tipoFiltro: e.target.value})
    }

    removerMovie(e){
        e.preventDefault();
    
        console.log(this.state.tituloAborrar)
        this.props.onDeleteMovie(this.state.tituloAborrar)

    }

    handleClick(e){
        let movie = e.currentTarget.querySelector("#title").childNodes[0]
        //console.log(e.currentTarget.props.movie)
        //console.log(movie)
        this.setState({tituloAborrar: movie})
        
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
                    {movies.map((item, index) => <Movie click={this.handleClick} key={index} movie={item} removerla={this.removerMovie} onDeleteMovie={this.onDeleteMovie} onEditMovie={this.props.onEditMovie}/>)}     
                </ul>
                <EditMovieForm onEditMovie={this.props.onEditMovie}/>
            </div>
            
          );
    }
}
const Movie = (props) => <li onClick={props.click}> 
                            <hr/>
                            <span id="title">{props.movie.title}</span> <br/>
                            <span>{props.movie.author}</span> <br/>
                            <span>{props.movie.year}</span> <br/>
                            <span>{props.movie.duration}</span> <br/>
                            <button onClick={props.onEditMovie}> edit </button> <button onClick={props.removerla}> delete </button> 
                        </li>;


export default MovieList;
