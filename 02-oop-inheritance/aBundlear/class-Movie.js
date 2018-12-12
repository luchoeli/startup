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
