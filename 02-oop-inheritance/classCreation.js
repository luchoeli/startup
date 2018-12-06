class Movie {
    constructor(name, year, duration){
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.title;  
        this.elenco = [];
        
    }

    //methods
    play() {
        //this.emit('event:playMovie', {duration: this.duration} );
    }

    pause() {

    }

    resume() {

    }
}

Movie.prototype.addCast = function(actores){
    if (Array.isArray(actores)){
        for ( i=0 ; i < actores.length || actores.length == 0 ; i++ ){
                this.elenco.push(actores[i]);
        }        
    } else {
        this.elenco.push(actores);
    }
}


const peli = new Movie("titanic",1997, "2:57:23");

class Actor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

const johnP = new Actor("sfdf",32);

class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        if( !this.events[eventName] ) {
            this.events[eventName] = [];
         }
           
         this.events[eventName].push(callback);

         return () => {
            this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);
          }  
    }

    emit(eventName) {
        const event = this.events[eventName];
        if( event ) {
            event.forEach(fn => {
            fn.call(null, data);
            });
        }
    }

    //unsubscribe implementado en el subs
    off(eventName, callback) {
        let unsubscribe = emitter.on('event:name-changed', data => console.log(data));
        unsubscribe();
    }
    
}