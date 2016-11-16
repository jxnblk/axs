
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
      viewBox='0 0 32 16'
      width='512'
      height='256'
      style={sx.root}>
      <rect width='32' height='16' fill='#be4bdb' />
      <g transform='translate(0 2)'>
        <Logo size={12} />
      </g>
    </Box>
  </Box>
)

export default TriangleIcon
