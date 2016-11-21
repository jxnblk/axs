
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

Object.defineProperty(config, 'breakpoints', {
  get () {
    return config.get().breakpoints
  }
})

Object.defineProperty(config, 'typeScale', {
  get () {
    return config.get().typeScale
  }
})

Object.defineProperty(config, 'scale', {
  get () {
    return config.get().scale
  }
})

Object.defineProperty(config, 'colors', {
  get () {
    return config.get().colors
  }
})

Object.defineProperty(config, 'bold', {
  get () {
    return config.get().bold
  }
})

export default config

