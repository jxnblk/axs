
import React from 'react'
import { Box } from '../src'
import Logo from './Logo'

const sx = {
  root: {
    display: 'block',
    margin: 0,
    color: '#fff'
  }
}

const TriangleIcon = () => (
  <div>
    <svg
      viewBox='0 0 32 32'
      width='512'
      height='512'
      style={sx.root}
    >
      <rect width='64' height='64' fill='#be4bdb' />
      <g id='lumberjack' opacity='0'>
        <rect width='64' height='64' fill='#f40' opacity='.0' />
        <g transform='scale(.5)'>
          <rect width='64' height='16' y='8' fill='#003' opacity={1/2} />
          <rect width='64' height='16' y='40' fill='#003' opacity={1/2} />
          <rect width='16' height='64' x='8' fill='#003' opacity={1/2} />
          <rect width='16' height='64' x='40' fill='#003' opacity={1/2} />
        </g>
      </g>
      <g transform='translate(0 8)'>
        <Logo size={16} />
      </g>
    </svg>
  </div>
)

export default TriangleIcon
