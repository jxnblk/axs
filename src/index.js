import React from 'react'
import tags from 'html-tags'
import Base from './Base'

export const hoc = is => props => <Base {...props} is={is} />

tags.forEach(tag => {
  Base[tag] = hoc(tag)
})

export { default } from './Base'
export { default as Base } from './Base'
export { default as Provider } from './Provider'
export { default as Style } from './Style'
export { default as css } from './css'
