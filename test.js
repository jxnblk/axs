const test = require('ava')
const React = require('react')
const render = require('react-test-renderer').create
const parse = require('./src/parse')
const Box = require('./src/Box')

test('parse exports a function', t => {
  t.is(typeof parse, 'function')
})

test('parse returns an object', t => {
  const a = parse({ type: 'text' })
  t.deepEqual(a, { type: 'text' })
})

test('parse converts shorthands', t => {
  const a = parse({ mt2: true, p2: true })
  t.deepEqual(a, {
    marginTop: 16,
    padding: 16
  })
})

test('parse handles array values', t => {
  const a = parse({ m: [ 1, 2 ] })
  console.log(a)
  t.is(typeof a, 'object')
})

test('Box renders', t => {
  const json = render(<Box mx2 p3 w={1/2} />).toJSON()
  console.log(json)
  t.snapshot(json)
})
