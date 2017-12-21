import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import Base, { Style } from './src'

test.afterEach(() => {
  Base.reset()
})

test('renders', t => {
  const a = render(<Base />).toJSON()
  t.snapshot(a)
})

test('Style renders', t => {
  const a = render(<Style css='.tomato{color:tomato;}' />).toJSON()
  t.snapshot(a)
})

test('renders with css prop', t => {
  const a = render(<Base css='color:tomato;' />).toJSON()
  t.snapshot(a)
})

test('renders with decorated HTML element key', t => {
  const a = render(<Base.h2 css='color:tomato;' />).toJSON()
  t.snapshot(a)
  t.is(a[1].type, 'h2')
})

test('caches results', t => {
  const a = render(
    <React.Fragment>
      <Base css='color:magenta;' />
      <Base css='color:magenta;' />
    </React.Fragment>
  ).toJSON()
  t.snapshot(a)
})

test('Base.reset() clears cache', t => {
  const a = render(<Base css='color:magenta;' />).toJSON()
  Base.reset()
  const b = render(<Base css='color:magenta;' />).toJSON()
  t.snapshot(a)
  t.snapshot(b)
  t.deepEqual(a[0], b[0])
})

test('Updates styles on css change', t => {
  const base = render(<Base css='color:tomato;' />)
  const a = base.toJSON()
  base.update(<Base css='color:green;' />)
  const b = base.toJSON()
  t.is(a[1].props.className, 'x0')
  t.is(b[1].props.className, 'x1')
  t.snapshot(a)
  t.snapshot(b)
})

test('Skips update when css is the same', t => {
  const base = render(<Base css='color:tomato;' />)
  const a = base.toJSON()
  base.update(<Base css='color:tomato;' />)
  const b = base.toJSON()
  t.is(a[1].props.className, 'x0')
  t.is(b[1].props.className, 'x0')
  t.deepEqual(a, b)
  t.snapshot(a)
  t.snapshot(b)
})

test('Extends Axs components', t => {
  const A = props => (
    <Base {...props}
      css={`
        color: tomato;
        ${props.css}
      `}
    />
  )
  const a = render(<Base is={A} css='font-size:32px;' />).toJSON()
  t.regex(a[0].props.dangerouslySetInnerHTML.__html, /color:tomato;font-size:32px/)
  t.snapshot(a)
})

