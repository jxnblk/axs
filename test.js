const test = require('ava')
const h = require('react').createElement
const render = require('react-test-renderer').create
const {
  parse,
  axs,
  AxsProvider,
  Flex,
  Box,
  Text,
} = require('./src')
const config = require('./src/config')

test('parse returns an object', t => {
  const p = parse()
  t.is(typeof parse, 'function')
  t.is(typeof p, 'object')
  t.deepEqual(p, {})
})

test('parse passes non-axs props through', t => {
  const a = parse({ className: 'hello' })
  t.deepEqual(a, { className: 'hello' })
})

test('parse removes width, padding, margin, and fontSize props', t => {
  const a = parse({
    width: 1,
    margin: 2,
    padding: 3,
    fontSize: 1
  })
  t.is(a.width, undefined)
  t.is(a.margin, undefined)
  t.is(a.padding, undefined)
  t.is(a.fontSize, undefined)
})

test('parse removes shorthand props', t => {
  const a = parse({
    w: 1,
    m: 2,
    p: 3,
    fs: 1
  })
  t.is(a.w, undefined)
  t.is(a.m, undefined)
  t.is(a.p, undefined)
  t.is(a.f, undefined)
})

test('parse removes shorthand boolean props', t => {
  const a = parse({
    m1: true,
    p2: true,
    f3: true
  })
  t.is(a.m1, undefined)
  t.is(a.p2, undefined)
  t.is(a.f3, undefined)
})

test('parse converts width, padding, margin, and fontSize to css prop', t => {
  const a = parse({
    width: 1,
    margin: 2,
    padding: 3,
    fontSize: 1
  })
  t.deepEqual(a, {
    css: {
      width: '100%',
      margin: 16,
      padding: 32,
      fontSize: 48
    }
  })
})

test('parse converts w, m, p, and f props to css prop', t => {
  const a = parse({
    w: 1,
    m: 2,
    p: 3,
    f: 1
  })
  t.deepEqual(a, {
    css: {
      width: '100%',
      margin: 16,
      padding: 32,
      fontSize: 48
    }
  })
})

test('parse converts shorthand boolean props to css prop', t => {
  const a = parse({
    m2: true,
    p3: true,
    f1: true
  })
  t.deepEqual(a, {
    css: {
      margin: 16,
      padding: 32,
      fontSize: 48
    }
  })
})

test('parse converts negative shorthand boolean props to css prop', t => {
  const a = parse({
    'm-2': true,
  })
  t.deepEqual(a, {
    css: {
      margin: -16,
    }
  })
})

test('parse converts array values', t => {
  const a = parse({
    w: [ 1, 1/2, 1/4 ],
    f: [ 3, 2, 1 ]
  })
  t.deepEqual(a, {
    css: {
      width: '100%',
      fontSize: 24,
      [config.breakpoints[0]]: {
        width: '50%',
        fontSize: 32
      },
      [config.breakpoints[1]]: {
        width: '25%',
        fontSize: 48
      }
    }
  })
})

test('parse converts directional values', t => {
  const a = parse({
    marginRight: 2,
    paddingBottom: 3,
    paddingLeft: 4
  })
  t.deepEqual(a, {
    css: {
      marginRight: 16,
      paddingBottom: 32,
      paddingLeft: 64
    }
  })
})

test('parse converts negative values', t => {
  const a = parse({
    marginLeft: -8,
    marginRight: -2,
  })
  t.deepEqual(a, {
    css: {
      marginLeft: -8,
      marginRight: -16,
    }
  })
})

test('parse converts shorthand directional values', t => {
  const a = parse({
    mt: 1,
    mx: 2,
    pl: 3,
    py: 4
  })
  t.deepEqual(a, {
    css: {
      marginTop: 8,
      marginLeft: 16,
      marginRight: 16,
      paddingLeft: 32,
      paddingTop: 64,
      paddingBottom: 64,
    }
  })
})

test('parse converts shorthand boolean directional values', t => {
  const a = parse({
    mt1: true,
    'mx-2': true,
    py3: true,
    pr4: true
  })
  t.deepEqual(a, {
    css: {
      marginTop: 8,
      marginLeft: -16,
      marginRight: -16,
      paddingTop: 32,
      paddingBottom: 32,
      paddingRight: 64
    }
  })
})

test('parse can be configured', t => {
  const conf = {
    space: [ 0, 6, 12, 24 ],
    typeScale: [ 72, 48, 24, 18, 12 ],
    breakpoints: [
      32,
      48
    ].map(n => `@media (min-width:${n}em)`)
  }
  const a = parse({
    p: [ 1, 2 ],
    m: 2,
    f: 0,
  }, conf)
  t.deepEqual(a, {
    css: {
      margin: 12,
      fontSize: 72,
      padding: 6,
      '@media (min-width:32em)': {
        padding: 12
      }
    }
  })
})

test('axs returns a react component', t => {
  const Div = axs()('div')
  const json = render(h(Div)).toJSON()
  t.snapshot(json)
})

test('axs component accepts css prop', t => {
  const Div = axs()('div')
  const json = render(h(Div, { css: { color: 'tomato' } })).toJSON()
  t.snapshot(json)
  t.is(typeof json.props.className, 'string')
  t.true(json.props.className.length > 0)
})

test('axs keeps user set className', t => {
  const Div = axs()('div')
  const json = render(h(Div, {
    className: 'hello',
    css: { color: 'tomato' }
  })).toJSON()
  t.regex(json.props.className, /^hello/)
})

test('axs component accepts style props', t => {
  const Div = axs()('div')
  const json = render(h(Div, {
    margin: 0,
    px: 2,
    py3: true,
    width: 1/2,
    f: 1
  })).toJSON()
  t.snapshot(json)
  t.true(json.props.className.length > 0)
})

test('axs component does not pass axs props to element', t => {
  const Div = axs()('div')
  const json = render(h(Div, {
    margin: 0,
    px: 2,
    py3: true,
    width: 1/2,
    f: 1
  })).toJSON()
  t.is(json.props.css, undefined)
  t.is(json.props.margin, undefined)
  t.is(json.props.px, undefined)
  t.is(json.props.py3, undefined)
  t.is(json.props.width, undefined)
  t.is(json.props.f, undefined)
})

test('axs supports the `is` prop', t => {
  const Div = axs()('div')
  const json = render(h(Div, { is: 'h1' })).toJSON()
  t.is(json.type, 'h1')
})

test('snapshots', t => {
  const box = render(h(Box)).toJSON()
  const text = render(h(Text)).toJSON()
  const flex = render(h(Flex)).toJSON()
  const flexCenter = render(h(Flex.center)).toJSON()
  const flexWrap = render(h(Flex.wrap)).toJSON()
  t.snapshot(box)
  t.snapshot(text)
  t.snapshot(flex)
  t.snapshot(flexCenter)
  t.snapshot(flexWrap)
})
