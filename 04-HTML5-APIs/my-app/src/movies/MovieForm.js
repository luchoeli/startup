import React from 'react';
class MovieForm extends React.Component {
    render() { 
        return (  
            <form>
                <label> Title: <input type="text" name="title" /> </label><br/>
                <label> Author: <input type="text" name="author"/> </label><br/>
                <label> Duration: <input type="time" name="duration"/> </label><br/>
                <input type="submit" value="Add Movie"/>
            </form>
        );
    }
}
 
export default MovieForm;