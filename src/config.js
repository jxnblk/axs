
import defaults from './util/default-config'

class Config {
  constructor (obj) {
    this._value = {
      ...defaults,
      ...obj
    }
  }

  set (obj) {
    this._value = {
      ...this._value,
      ...obj
    }
  }

  get () {
    return {...this._value}
  }

  reset () {
    this._value = defaults
  }
}

const config = new Config()

export default config

