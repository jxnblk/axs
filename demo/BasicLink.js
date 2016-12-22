
import React from 'react'
import { Box, config } from 'axs'

const BasicLink = props => (
  <Box
    is='a'
    css={{
      textDecoration: 'none',
      color: 'inherit',
      ':hover': {
        textDecoration: 'underline'
      },
      ':focus': {
        outline: 'none',
        textDecoration: 'underline',
        color: config.colors.fuschia
      }
    }}
    {...props}
  />
)

export default BasicLink

