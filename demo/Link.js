
import React from 'react'
import { Text, config } from '../src'
import history from './history'

const onClick = (e, to, basehref = '') => {
  e.preventDefault()
  if (!to) return
  history.push(basehref + to)
  window.scrollTo(0, 0)
}

const Link = ({ to, href, ...props }, { basehref = '' }) => {
  return (
    <Text
      href={href || basehref + to}
      size6
      bold
      caps
      grape
      display='inline-block'
      py2
      {...props}
      is='a'
      onClick={e => to ? onClick(e, to, basehref) : null}
      css={{
        textDecoration: 'none',
        ':hover': {
          color: config.colors.grape9
        },
        ':focus': {
          outline: 'none',
          color: config.colors.grape9,
          boxShadow: `0 0 0 2px ${config.colors.grape1}`
        }
      }}
    />
  )
}

Link.contextTypes = {
  basehref: React.PropTypes.string
}

export default Link

