
import React from 'react'
import { Text } from '../src'

const Pre = props => (
  <Text
    is='pre'
    m0
    p2
    fontSize={6}
    fuschia8
    {...props}
    css={cx}
  />
)

const cx = {
  fontFamily: 'Menlo, monospace',
  maxWidth: '100%',
  overflow: 'auto',
}

export default Pre

