
import React from 'react'
import Box from './Box'

const Flex = props => (
  <Box
    {...props}
    display='flex'
  />
)

Flex.displayName = 'Flex'

export default Flex

