
import React from 'react'
import { Text } from '../src'

const Pre = props => (
  <Text
    is='pre'
    size5
    grape
    {...props}
    css={cx}
  />
)

const cx = {
  fontFamily: 'Menlo, monospace',
  maxWidth: '100%',
  overflow: 'auto',
  padding: 16
}

export default Pre

