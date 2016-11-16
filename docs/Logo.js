
import React from 'react'
import { Box } from '../src'

const M = 'M'
const L = 'L'

/* Reference Reline Triangle source
 * Shape
 * 0 a    8    c 16
 *
  const a = strokeWidth / 2
  const b = 8 - a
  const c = 16 - a
  [a, 13],
  [c, 13],
  [8, 13 - b * Math.sqrt(3)],
  ['z']
*/

const a = 1 // edge offset
const b = 8 - a
const c = 16 - a // outer edge offset
const base = 13
const tri = [
  M, a, base, L, c, base,
  L, 8, base - b * Math.sqrt(3),
  'z'
].join(' ')
const shiftx = n => n + 6
const shifty = n => n + 3
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

