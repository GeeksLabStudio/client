import EventEmitter from 'events';

export default class Store extends EventEmitter {
  unknownAction() {
    this.emit('unknown')
  }
}
