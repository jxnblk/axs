
import React from 'react'
import { Box } from 'axs'

// Flex props (parse array)
// - wrap
// - direction
// - align (items)
// - justify (content)

const Flex = props => (
  <Box
    {...props}
    display='flex'
  />
)

Flex.displayName = 'Flex'

export default Flex

