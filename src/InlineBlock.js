
import React from 'react'
import Box from './Box'

const InlineBlock = props => (
  <Box
    {...props}
    display='inline-block'
  />
)

InlineBlock.displayName = 'InlineBlock'

export default InlineBlock

