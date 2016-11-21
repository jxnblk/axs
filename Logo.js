
import React from 'react'
import { Box } from '../src'

const M = 'M'
const L = 'L'

const a = 2 // edge offset
const b = 8 - a
const c = 16 - a // outer edge offset
const base = 12.5
const tri = [
  M, a, base, L, c, base,
  L, 8, base - b * Math.sqrt(3),
  'z'
].join(' ')

const rad = deg => Math.PI * deg / 180
const H = (c - a) * 2/4
const A = Math.cos(rad(30)) * H
const B = Math.sin(rad(30)) * H

const shiftx = n => n + A
const shifty = n => n + B
const handle = [
  M, shiftx(a), shifty(base),
  L, shiftx(8), shifty(base) - b * Math.sqrt(3)
].join(' ')

const Logo = ({
  size = 64,
  color = 'currentcolor',
  ...props
}) => (
  <Box is='svg'
    display='inline-block'
    m0
    {...props}
    viewBox='0 0 16 16'
    width={size}
    height={size}
    style={{
      overflow: 'visible'
    }}
    fill='none'
    stroke={color}>
    <path d={tri} />
    <path d={handle} />
  </Box>
)

export default Logo

