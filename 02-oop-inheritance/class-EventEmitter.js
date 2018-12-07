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
  } //se desubscribe de una funcion de in evento


  off(eventName, callback) {
    let unsubscribe = this.on(eventName, callback);
    unsubscribe();
  } //se desubscribe de todo el evento


  offEvent(eventName) {
    //FIXME
    //debugger;
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
