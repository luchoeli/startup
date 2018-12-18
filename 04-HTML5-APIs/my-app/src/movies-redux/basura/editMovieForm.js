import React from 'react';
import './stylesheets/editMovieStyle.css'
import MovieForm from './MovieForm';
class EditMovieForm extends React.Component {

    render() { 
        return ( 
         <MovieForm modo="Edit movie" movieOriginal={this.props.moviedata}  onUpdateList={this.props.onEditMovie}/> 
        );
    }
}
 
export default EditMovieForm;