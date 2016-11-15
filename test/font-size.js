
import test from 'ava'
import { getFontSize } from '../src/util/font-size'
import config from '../src/util/default-config'

const { breakpoints, typeScale } = config

test('returns a style object', t => {
  const style = getFontSize(config)('size', 2)
  t.is(typeof style, 'object')
  t.deepEqual(style, {
    fontSize: config.typeScale[2]
  })
})

test('handles zero values', t => {
  const style = getFontSize(config)('size', 0)
  t.deepEqual(style, {
    fontSize: config.typeScale[0]
  })
})

test('handles non-scalar values', t => {
  const style = getFontSize(config)('size', 72)
  t.deepEqual(style, {
    fontSize: 72
  })
})

test('handles null values', t => {
  const style = getFontSize(config)('size', null)
  t.deepEqual(style, null)
})

test('handles array values', t => {
  const style = getFontSize(config)('size', [
    3, null, 2, 1
  ])
  t.deepEqual(style, {
    fontSize: typeScale[3],
    [breakpoints[1]]: {
      fontSize: typeScale[2],
    },
    [breakpoints[2]]: {
      fontSize: typeScale[1]
    },
  })
})

