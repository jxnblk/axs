
import test from 'ava'
import parseArrayValue from '../src/util/parse-array-value'
import config from '../src/util/default-config'

const parseArray = parseArrayValue(config.breakpoints)

const createMargin = value => {
  return { margin: config.scale[value] }
}
const val = [
  0, 1, 2, 3
]

test('returns a style object', t => {
  const style = parseArray(val)(createMargin)
  t.is(typeof style, 'object')
  t.deepEqual(style, {
    margin: 0,
    [config.breakpoints[0]]: {
      margin: 8
    },
    [config.breakpoints[1]]: {
      margin: 16
    },
    [config.breakpoints[2]]: {
      margin: 32
    },
  })
})

test('handles null values in array', t => {
  const style = parseArray([
    0, null, null, 2
  ])(createMargin)
  t.is(typeof style, 'object')
  t.deepEqual(style, {
    margin: 0,
    [config.breakpoints[2]]: {
      margin: 16
    },
  })
})
