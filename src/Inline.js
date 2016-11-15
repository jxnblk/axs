
import React from 'react'
import Box from './Box'

const Inline = props => (
  <Box
    {...props}
    display='inline'
  />
)

Inline.displayName = 'Inline'

export default Inline

