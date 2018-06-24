class Emitter {
  
  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    //create empty object for storing all events
    this.events = {};
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
    // if event type doesn't exist - create this event type and initialize it with empty handlers list
    if(!this.events[event]) {
      this.events[event] = [];
    }
    //store handler in the list associated with this event type
    this.events[event].push(handler);
  }

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
    //get event handlers list
    const eventHandlersList = this.events[event];
    if (eventHandlersList) {
      //call each handler
      eventHandlersList.forEach(fn => {
        fn.call(null, data);
      });
    }
  }
}
const emitter = new Emitter();

emitter.on('connect', data => {
    console.log('We have been connected to', data);
});

emitter.on('disconnect', data => {
    console.log('We disconnected from', data);
});

emitter.emit('connect', 'http-server');
// prints to console:
// > We have been connected to http-server
emitter.emit('connect', 'websocket');
// prints to console:
// > We have been connected to websocket

emitter.emit('disconnect', 'websocket');
// prints to console:
// > We disconnected from websocket
emitter.emit('disconnect', 'http-server');
// prints to console:
// > We disconnected from http-server

export default Emitter;
