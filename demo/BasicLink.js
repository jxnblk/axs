
import React from 'react'
import { Box, colors } from 'axs'

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
        color: colors.grape
      }
    }}
    {...props}
  />
)

export default BasicLink

