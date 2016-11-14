
import test from 'ava'
import parseProps from '../src/util/parse-text-props'
import config from '../src/util/default-config'
import { cxs } from '../src'

const props = {
  m: 1,
  size: 2,
  bold: true,
  color: 'blue',
  bg: 'red',
  className: 'Foo',
  id: 'pass-through'
}

test.afterEach(() => {
  cxs.clear()
  cxs.sheet.flush()
})

test('returns props and className', t => {
  const result = parseProps()(props)
  t.is(typeof result, 'object')
  t.is(typeof result.props, 'object')
  t.is(typeof result.className, 'string')
})

test('strips style props', t => {
  const result = parseProps()(props)
  t.deepEqual(result.props, {
    className: 'Foo',
    id: 'pass-through'
  })
})

test('combines classNames', t => {
  const result = parseProps()(props)
  t.regex(result.className, /Foo/)
  t.regex(result.className, /cxs/)
})

test('converts shorthand props', t => {
  const result = parseProps()({
    'm0': true,
    'blue': true
  })
  t.deepEqual(result.props, {})
})

test('creates css', t => {
  const result = parseProps()(props)
  const css = cxs.css
  const cxsClass = result.className.split(' ')[1]
  t.regex(css, new RegExp(cxsClass))
  t.regex(css, /margin:8px/)
  t.regex(css, /font-size:32px/)
  t.regex(css, /font-weight:700/)
  t.regex(css, /;color:/)
  t.regex(css, /background-color:/)
})


