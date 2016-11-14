
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
      color: colors.gray,
      ':hover': {
        color: colors.grape
      },
      ':focus': {
        outline: 'none',
        color: colors.grape
      }
    }}
  />
)

export default Link

