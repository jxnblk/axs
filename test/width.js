
import test from 'ava'
import { getWidth } from '../src/util/width'
import config from '../src/util/default-config'

test('returns a style object', t => {
  const style = getWidth(config.breakpoints)(1)
  t.is(typeof style, 'object')
  t.deepEqual(style, { width: '100%' })
})

test('returns a breakpoint style object', t => {
  const style = getWidth(config.breakpoints)([1, null, 1/2])
  t.deepEqual(style, {
    width: '100%',
    [config.breakpoints[1]]: { width: '50%' }
  })
})

test('handles zero values', t => {
  const style = getWidth(config.breakpoints)(0)
  t.deepEqual(style, {
    width: '0%'
  })
})

test('handles array values', t => {
  const style = getWidth(config.breakpoints)([
    1,
    1/2,
    1/4,
    1/8,
  ])
  t.deepEqual(style, {
    width: '100%',
    [config.breakpoints[0]]: { width: '50%' },
    [config.breakpoints[1]]: { width: '25%' },
    [config.breakpoints[2]]: { width: '12.5%' },
  })
})

test('handles null values in array', t => {
  const style = getWidth(config.breakpoints)([
    1,
    null,
    1/2,
    1/4,
  ])
  t.deepEqual(style, {
    width: '100%',
    [config.breakpoints[1]]: { width: '50%' },
    [config.breakpoints[2]]: { width: '25%' },
  })
})


