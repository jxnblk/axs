
import test from 'ava'
import {
  parseMargin,
  parsePadding
} from '../src/util/scale-prop'
import config from '../src/util/default-config'

const margin = parseMargin(config)
const padding = parsePadding(config)

test('returns a style object', t => {
  const style = margin('m', 1)
  t.is(typeof style, 'object')
  t.deepEqual(style, {
    margin: 8
  })
})

test('returns a directional style object', t => {
  const style = margin('mt', 1)
  t.deepEqual(style, {
    marginTop: 8
  })
})

test('returns mutli-directional styles', t => {
  const style = margin('mx', 1)
  t.deepEqual(style, {
    marginLeft: 8,
    marginRight: 8
  })
})

test('handles zero values', t => {
  const style = margin('m', 0)
  t.deepEqual(style, {
    margin: 0
  })
})

test('handles negative values', t => {
  const style = margin('mx', -2)
  t.deepEqual(style, {
    marginLeft: -16,
    marginRight: -16
  })
})

test('returns padding styles', t => {
  const style = padding('p', 2)
  t.deepEqual(style, {
    padding: 16
  })
})

test('returns directional padding styles', t => {
  const style = padding('pb', 2)
  t.deepEqual(style, {
    paddingBottom: 16
  })
})

test('returns multi-directional padding styles', t => {
  const style = padding('px', 2)
  t.deepEqual(style, {
    paddingLeft: 16,
    paddingRight: 16
  })
})

