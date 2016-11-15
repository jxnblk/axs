
import test from 'ava'
import {
  getColor,
  getBgColor,
  getBorderColor
} from '../src/util/color'
import config from '../src/util/default-config'

const color = getColor(config)
const bg = getBgColor(config)
const border = getBorderColor(config)

test('returns a color style object', t => {
  const style = color('color', 'blue')
  t.is(typeof style, 'object')
  t.deepEqual(style, {
    color: config.colors.blue
  })
})

test('returns a custom color style object', t => {
  const style = color('color', 'tomato')
  t.deepEqual(style, {
    color: 'tomato'
  })
})

test('returns a background color style object', t => {
  const style = bg('bg', 'blue')
  t.is(typeof style, 'object')
  t.deepEqual(style, {
    backgroundColor: config.colors.blue
  })
})

test('returns a custom background color style object', t => {
  const style = bg('bg', 'tomato')
  t.deepEqual(style, {
    backgroundColor: 'tomato'
  })
})

test('returns a border color style object', t => {
  const style = border('borderColor', 'blue')
  t.is(typeof style, 'object')
  t.deepEqual(style, {
    borderColor: config.colors.blue
  })
})

test('returns a custom border color style object', t => {
  const style = border('borderColor', 'tomato')
  t.deepEqual(style, {
    borderColor: 'tomato'
  })
})

