import React from 'react';
class MovieList extends React.Component {
    constructor(){
        super()
        this.state = { tipoFiltro: "all"}
    }

    filter(e){
        this.setState({filter: e.target.value})
    }

    tipoFiltro(e){
        this.setState({tipoFiltro: e.target.value})
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
                    {movies.map((item, index) => <Movie key={index} movie={item}/>)}     
                </ul>
            </div>
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
                            <button> edit </button> <button> delete </button> 
                        </li>;

export default MovieList;