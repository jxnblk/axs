import React from 'react'
import tags from 'html-tags'
import Base from './Base'

export const hoc = is => props => <Base {...props} is={is} />

export const upper = str => str.charAt(0).toUpperCase() + str.slice(1)
tags.forEach(tag => {
  Base[upper(tag)] = hoc(tag)
})

export { default } from './Base'
export { default as Provider } from './Provider'
export { default as Style } from './Style'
export { default as css } from './css'
