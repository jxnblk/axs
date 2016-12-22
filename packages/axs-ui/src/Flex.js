
import React from 'react'
import classnames from 'classnames'
import { Box, cxs, config } from 'axs'

const Flex = props => {
  return (
    <Box
      {...props}
      display='flex'
    />
  )
}

Flex.displayName = 'Flex'

export default Flex

