import React from 'react';

const MovieListItem = (props) => <li> 
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

export default MovieListItem;