
import test from 'ava'
import convertProps from '../src/util/convert-shorthand-props'
import config from '../src/util/default-config'

const convert = convertProps(config)

const marginProps = {
  'm1': true,
  'mx-1': true,
  'mb2': true,
}

const paddingProps = {
  'px2': true
}

const sizeProps = {
  'size2': true
}

const colorProps = {
  'blue': true,
  'bgBlack': true,
  'borderRed': true
}

test('returns an object', t => {
  const props = convert(marginProps)
  t.is(typeof props, 'object')
})

test('parses shorthand margin props', t => {
  const props = convert(marginProps)
  t.deepEqual(props, {
    m: 1,
    mx: -1,
    mb: 2
  })
})

test('parses padding props', t => {
  const props = convert(paddingProps)
  t.deepEqual(props, {
    px: 2
  })
})

test('parses size prop', t => {
  const props = convert(sizeProps)
  t.deepEqual(props, {
    size: 2
  })
})

test('parses color props', t => {
  const props = convert(colorProps)
  t.deepEqual(props, {
    color: 'blue',
    bg: 'black',
    borderColor: 'red'
  })
})

