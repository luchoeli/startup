class Logger {
  log(eventName, info) {
    console.log("--- Evento: " + eventName + " de la pelicula " + info.title + " disparado.");
  }

}

export default Logger;
