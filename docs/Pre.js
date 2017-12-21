import React from 'react'
import Text from './Text'

const Pre = props =>
  <Text
    {...props}
    is='pre'
    m={0}
    css={`
      font-family: Menlo, monospace;
      font-size: 14px;
      overflow: auto;
    `}
  />

export default Pre
