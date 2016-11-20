
import React from 'react'
import { Text, colors } from '../src'
import history from './history'

const onClick = (e, to) => {
  e.preventDefault()
  if (!to) return
  history.push(to)
}

const Link = ({ to, ...props }) => {
  return (
    <Text
      size6
      bold
      grape
      {...props}
      is='a'
      onClick={e => to ? onClick(e, to) : null}
      css={{
        display: 'inline-block',
        paddingTop: 16,
        paddingBottom: 16,
        textDecoration: 'none',
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
}

export default Link

