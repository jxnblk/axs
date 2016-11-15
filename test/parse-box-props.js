
import test from 'ava'
import parseProps from '../src/util/parse-box-props'
import config from '../src/util/default-config'
import { cxs } from '../src'

const props = {
  m: 2,
  px: 3,
  width: 1/2,
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
  bgRed: true,
}

test.afterEach(() => {
  cxs.clear()
  cxs.sheet.flush()
})

test('returns props and className object', t => {
  const result = parseProps()(props)
  t.is(typeof result, 'object')
  t.is(typeof result.props, 'object')
  t.is(typeof result.className, 'string')
})

test('strips style props', t => {
  const result = parseProps()(props)
  t.deepEqual(result.props, {
    id: 'pass-through'
  })
})

test('creates css', t => {
  const result = parseProps()(props)
  const css = cxs.css
  t.regex(css, new RegExp(result.className))
  t.regex(css, /margin:16px/)
  t.regex(css, /padding-left:32px/)
  t.regex(css, /width:50%/)
  t.regex(css, /display:inline-block/)
  t.regex(css, /border:1px solid/)
  t.regex(css, /border-radius:2px/)
  t.regex(css, /;color/)
  t.regex(css, /;background-color/)
  t.regex(css, /;border-color/)
})

test('converts shorthand props', t => {
  const result = parseProps()(shortProps)
  t.deepEqual(result.props, {})
})

