import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher';

export default class CounterStore extends EventEmitter {
  constructor(initialState) {
    super();
    this._count = initialState;
    AppDispatcher.register((action) => {
      const {type, payload} = action;
      switch(type) {
        case 'COUNT_UP':
          this._countUp();
      }
    })
  }
  
  getCount() {
    return this._count
  }
  
  _countUp(count){
    console.log(this._count);
    return this._count += 1
  }

  addCountUpListener(cb){
    this.on('COUNT_UP', cb);
  }

  removeCountUpListener(cb) {
    this.removeListener('COUNT_UP', cb);
  }

  emitCount(){
    this.emit('COUNT_UP');
  }
}