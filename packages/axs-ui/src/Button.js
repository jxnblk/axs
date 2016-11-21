
import React from 'react'
import { Box, config } from 'axs'
import resets from './resets'

const Button = ({ href, css, ...props }) => (
  <Box
    is={href ? 'a' : 'button'}
    href={href}
    css={{
      ...cx,
      ...css
    }}
    bold
    white
    bgBlue
    rounded
    {...props}
  />
)

const cx = {
  ...resets.button,
  ':hover': {
    backgroundColor: config.colors.blue7
  },
  ':focus': {
    outline: 'none',
    backgroundColor: config.colors.blue7,
    boxShadow: `0 0 0 2px ${config.colors.blue3}`
  }
}

export default Button

