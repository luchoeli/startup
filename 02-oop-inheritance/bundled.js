class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}

export default Actor;
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
    return () => {
      this.events[eventName] = this.events[eventName].filter(eventFn => eventFn !== callback);
    };
  }

  emit(eventName, data) {
    const event = this.events[eventName];

    if (event) {
      event.forEach(fn => {
        fn(eventName, data);
      });
    }
  } 

  off(eventName, callback) {
    let unsubscribe = this.on(eventName, callback);
    unsubscribe();
  } 


  offEvent(eventName) {
    console.log(this.events.length);

    for (var i = 0; i < this.events.length; i++) {
      console.log(this.events[i]);

      if (this.events[i] == eventName) {
        delete events[i];
        break;
      }
    }
  }

}

export default EventEmitter;
class Logger {
  log(eventName, info) {
    console.log("--- Evento: " + eventName + " de la pelicula " + info.title + " disparado.");
  }

}

export default Logger;
class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.elenco = [];
    this.on('playMovie', data => {
      console.log("reproduciendo " + this.title);
    });
    this.on('playMovie', data => {
      console.log("reproduciendo2 " + this.title);
    });
    this.on('pauseMovie', data => {
      console.log(this.title + ": pausada.");
    });
    this.on('resumeMovie', data => {
      console.log("reanudando " + this.title);
    });
  } 


  play() {
    this.emit('playMovie', this);
  }

  pause() {
    this.emit('pauseMovie', this);
  }

  resume() {
    this.emit('resumeMovie', this);
  }

}

Movie.prototype.addCast = function (actores) {
  if (Array.isArray(actores)) {
    for (i = 0; i < actores.length || actores.length == 0; i++) {
      this.elenco.push(actores[i]);
    }
  } else {
    this.elenco.push(actores);
  }
};

let social = {
  share(friendName) {
    console.log(friendName + " share " + this.title);
  },

  like(friendName) {
    console.log(friendName + " likes " + this.title);
  }

};
Object.assign(Movie.prototype, social);
export default Movie;
import { Actor } from "./class-Actor";
import { Movie } from "./class-Movie";
import { EventEmitter } from "./class-EventEmitter";
import { Logger } from "./class-Logger";
const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
const johnP = new Actor("John Perez", 32);
const peli = new Movie("titanic", 1997, "2:57:23");
let logger = new Logger();
peli.on('playMovie', logger.log);
s;
peli.offEvent("playMovie");
