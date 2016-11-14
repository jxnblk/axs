
import React from 'react'
import { Box } from '../src'

const Pre = props => (
  <Box
    is='pre'
    grape
    {...props}
    css={cx}
  />
)

const cx = {
  fontFamily: 'Menlo, monospace',
  fontSize: 12,
  maxWidth: '100%',
  overflow: 'auto',
  padding: 16
}

export default Pre

