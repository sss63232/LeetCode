class EventEmitter {
  constructor () {
    this._listenersMap = {}
  }

  on (eventName, callback) {
    if (this._listenersMap[eventName]) {
      this._listenersMap[eventName].push(callback)
    } else {
      this._listenersMap[eventName] = [callback]
    }
  }

  once (eventName, callback) {
    const onceWrappedFn = event => {
      callback(event)
      this.off(eventName, onceWrappedFn)
    }

    this.on(eventName, onceWrappedFn)
  }

  emit (eventName, event) {
    if (!this._listenersMap[eventName]) {
      throw new Error(`${eventName} does not exit`)
    }

    this._listenersMap[eventName].forEach(cb => cb(event))
  }

  off (eventName, callback) {
    if (!this._listenersMap[eventName]) {
      throw new Error(`${eventName} does not exit`)
    }

    this._listenersMap[eventName] = this._listenersMap[eventName].filter(
      cb => cb !== callback
    )
  }
}

const ee = new EventEmitter()
ee.on('TestEvent', console.log)
ee.once('Once', console.log)

ee.emit('Once', 'hello')
ee.emit('Once', 'world')
