class EventEmitter {
  constructor() {
    this._listeners = {}
  }

  on(eventName, callback) {
    if (this._listeners[eventName]) {
      this._listeners[eventName].push(callback)
    } else {
      this._listeners[eventName] = [callback]
    }
  }

  once(eventName, callback) {
    const onceWrappedFn = (e) => {
      callback(e)
      this.off(eventName, onceWrappedFn)
    }

    this.on(eventName, onceWrappedFn)
  }

  emit(eventName, event) {
    if (!this._listeners[eventName]) {
      throw new Error(`${eventName} does not exit`)
    }

    this._listeners[eventName].forEach(cb => cb(event))
  }

  off(eventName, callback) {
    if (!this._listeners[eventName]) {
      throw new Error(`${eventName} does not exit`)
    }

    this._listeners[eventName] = this._listeners[eventName].filter(cb => cb !== callback)
  }
}

const ee = new EventEmitter()
ee.on('TestEvent', console.log)
ee.once('Once', console.log)

ee.emit('Once', 'hello')
ee.emit('Once', 'world')
