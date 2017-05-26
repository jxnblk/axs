const test = require('ava')
const React = require('react')
const render = require('react-test-renderer').create
const { attr, Box } = require('./src')

test('attr.width formats width', t => {
  const a = attr.width({ width: 1/2 })
  t.is(a, '50%')
})

test('attr.width formats w', t => {
  const a = attr.width({ w: 1/4 })
  t.is(a, '25%')
})

test('attr.margin formats margin', t => {
  const a = attr.margin({ margin: 10 })
  t.is(a, '10px')
  const b = attr.margin({ margin: 2 })
  t.is(b, '16px')
  const c = attr.margin({ margin: -1 })
  t.is(c, '-8px')
})

test('attr.margin formats m', t => {
  const a = attr.margin({ m: 10 })
  t.is(a, '10px')
  const b = attr.margin({ m: 2 })
  t.is(b, '16px')
  const c = attr.margin({ m: -1 })
  t.is(c, '-8px')
})

test.skip('attr.marginTop formats margin', t => {
  const a = attr.marginTop({ marginTop: 10 })
  t.is(a, '10px')
  const b = attr.marginTop({ marginTop: 2 })
  t.is(b, '16px')
  const c = attr.marginTop({ marginTop: -1 })
  t.is(c, '-8px')
})

/*
test('parse exports a function', t => {
  t.is(typeof parse, 'function')
})

test('parse accepts props object and returns an object', t => {
  const props = {
    type: 'number',
    value: 32
  }
  const parsed = parse(props)
  t.is(typeof parsed, 'object')
  t.deepEqual(parsed, props)
})

test('parses width prop', t => {
  const a = parse({ width: 1 })
  t.is(a.width, '100%')
})

test('parse returns a number for widths greater than 1', t => {
  const a = parse({ width: 12 })
  t.is(a.width, 12)
})

test('parse returns percentage widths for fractions', t => {
  const a = parse({ width: 1/2 })
  t.is(a.width, '50%')
})

test('parses space values', t => {
  const a = parse({
    margin: 1,
    marginBottom: 3,
    padding: 2,
    paddingLeft: 4
  })
  t.deepEqual(a, {
    margin: 8,
    marginBottom: 32,
    padding: 16,
    paddingLeft: 64
  })
})

test('parses shorthand props', t => {
  const a = parse({
    m: 0,
    mb: 2,
    px: 5,
  })
  t.is(typeof a, 'object')
  t.deepEqual(a, {
    margin: 0,
    marginBottom: 16,
    paddingLeft: 5,
    paddingRight: 5
  })
})

test('parses boolean shorthands', t => {
  const a = parse({
    m0: true,
    mb1: true,
    mx1: true,
    p2: true,
    py1: true,
    pr3: true
  })
  t.deepEqual(a, {
    margin: 0,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    padding: 16,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 32,
  })
})

test('parses negative margin props', t => {
  const a = parse({
    marginLeft: -1,
    marginRight: -2
  })
  t.deepEqual(a, {
    marginLeft: -8,
    marginRight: -16,
  })
})

test('parses negative shorthands', t => {
  const a = parse({
    mx: -3
  })
  t.deepEqual(a, {
    marginLeft: -32,
    marginRight: -32
  })
})

test('parses negative boolean shorthands', t => {
  const a = parse({
    'mx-3': true
  })
  t.deepEqual(a, {
    marginLeft: -32,
    marginRight: -32
  })
})
*/

test.skip('Box renders', t => {
  const json = render(<Box />).toJSON()
  t.snapshot(json)
})
