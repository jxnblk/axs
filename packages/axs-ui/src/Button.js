
import React from 'react'
import { Box, config } from 'axs'
import resets from './resets'

const Button = ({ href, ...props }) => {
  return (
    <Box
      is={href ? 'a' : 'button'}
      href={href}
      _css={cx}
      bold
      rounded
      white
      bgBlue
      {...props}
    />
  )
}

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

Button.displayName = 'Button'

export default Button

