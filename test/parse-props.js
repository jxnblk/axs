import test from 'ava'
import parseProps from '../src/parse-props'
import { cxs } from '../src'

const props = {
  m: 2,
  px: 3,
  width: 1 / 2,
  fontSize: 3,
  bold: true,
  display: 'inline-block',
  border: true,
  rounded: true,
  color: 'blue',
  bg: 'red',
  borderColor: 'green',
  id: 'pass-through'
}

const shortProps = {
  m2: true,
  px3: true,
  blue: true,
  bgRed: true
}

test.afterEach(() => {
  cxs.reset()
})

test('returns props and className object', t => {
  const result = parseProps(props)
  t.is(typeof result, 'object')
  t.is(typeof result.props, 'object')
  t.is(typeof result.className, 'string')
})

test('strips style props', t => {
  const result = parseProps(props)
  t.deepEqual(result.props, {
    id: 'pass-through'
  })
})

test('creates css', t => {
  const result = parseProps(props) // eslint-disable-line no-unused-vars
  const css = cxs.getCss()
  t.regex(css, /margin:16px/)
  t.regex(css, /padding-left:32px/)
  t.regex(css, /width:50%/)
  t.regex(css, /font-size:24px/)
  t.regex(css, /font-weight:700/)
  t.regex(css, /display:inline-block/)
  t.regex(css, /border-width:1px/)
  t.regex(css, /border-style:solid/)
  t.regex(css, /border-radius:2px/)
  t.regex(css, /color/)
  t.regex(css, /background-color/)
  t.regex(css, /border-color/)
})

test('converts shorthand props', t => {
  const result = parseProps(shortProps)
  t.deepEqual(result.props, {})
})
