import React from 'react';
class MovieForm extends React.Component {
    
    constructor(){
        super()
        this.state = {
            title: '',
            author:'', 
            duration:'',
            year: ''
        }
    
        this.titleRef = React.createRef() 
        this.authorRef = React.createRef()   
        this.durationRef = React.createRef()  
        this.yearRef = React.createRef()    
        this.onSubmit = this.onSubmit.bind(this)  
    }
    
    onSubmit(e) {
        e.preventDefault();
        this.props.onUpdateList({
            title: this.titleRef.current.value,
            author: this.authorRef.current.value,
            duration: this.durationRef.current.value,
            year: this.yearRef.current.value.toString()
        })
    }    

    render() { 
        return ( 
            <form onSubmit={this.onSubmit}>  
                <label for="title"> Title: <input id="title" type="text" name="title" ref={this.titleRef}   /> </label><br/>
                <label for="author"> Author: <input id="author"type="text"  name="author" ref={this.authorRef} /> </label><br/>
                <label for="duration"> Duration: <input id="duration"type="time"  name="duration" ref={this.durationRef} /> </label><br/>
                <label for="year"> year <input id="year"type="Number" name="year" ref={this.yearRef} /> </label><br/>
                <input type="submit" value="Add Movie"/>
            </form>

        );
    }
}
 
export default MovieForm;