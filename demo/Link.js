
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
      fontSize={6}
      bold
      caps
      fuschia
      display='inline-block'
      py2
      {...props}
      is='a'
      onClick={e => to ? onClick(e, to, basehref) : null}
      css={{
        textDecoration: 'none',
        ':hover': {
          color: config.colors.fuschia9
        },
        ':focus': {
          outline: 'none',
          color: config.colors.fuschia9,
          boxShadow: `0 0 0 2px ${config.colors.fuschia1}`
        }
      }}
    />
  )
}

Link.contextTypes = {
  basehref: React.PropTypes.string
}

export default Link

