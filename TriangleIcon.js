
import React from 'react'
import { Box } from '../src'
import Logo from './Logo'

const sx = {
  root: {
    display: 'block',
    margin: 0,
    color: '#fff',
    // overflow: 'visible'
  }
}

const css = `body{margin:0}`

const TriangleIcon = () => (
  <Box>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <Box is='svg'
      viewBox='0 0 32 24'
      width='512'
      height='384'
      style={sx.root}>
      <rect width='32' height='24' fill='#be4bdb' />
      <g transform='translate(0 6)'>
        <Logo size={12} />
      </g>
    </Box>
  </Box>
)

export default TriangleIcon
