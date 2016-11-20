
import React from 'react'
import { Text, colors } from '../src'

const Link = props => (
  <Text
    size6
    bold
    {...props}
    is='a'
    css={{
      display: 'inline-block',
      paddingTop: 16,
      paddingBottom: 16,
      color: 'inherit',
      textDecoration: 'none',
      color: colors.grape,
      ':hover': {
        color: colors.grape9
      },
      ':focus': {
        outline: 'none',
        color: colors.grape9,
        boxShadow: `0 0 0 2px ${colors.grape1}`
      }
    }}
  />
)

export default Link

