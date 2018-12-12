import React from 'react';
class MovieForm extends React.Component {
    
    constructor(){
        super()
        this.state = {
            title: '',
            author:'', 
            duration:''
        }
       // this.updateTitle = this.updateTitle.bind(this) 
        this.titleRef = React.createRef() 
        this.authorRef = React.createRef()   
        this.durationRef = React.createRef()   
        this.onSubmit = this.onSubmit.bind(this)  
    }
    
    onSubmit(e) {
        e.preventDefault();
        this.props.onAddMovie({
            title: this.titleRef.current.value,
            author: this.authorRef.current.value,
            duration: this.durationRef.current.value
        })
    }


    /*
    updateTitle(e){
        console.log(e.target.name)
        this.setState({title: e.target.value})
    }
    */
    

    render() { 
        return ( 
            <form onSubmit={this.onSubmit}>  
                <label> Title: <input type="text" name="title" ref={this.titleRef}   /> </label><br/>
                <label> Author: <input type="text"  name="author" ref={this.authorRef} /> </label><br/>
                <label> Duration: <input type="time"  name="duration" ref={this.durationRef} /> </label><br/>
                <input type="submit" value="Add Movie"/>
            </form>
        
        
        );
    }
}
 
export default MovieForm;