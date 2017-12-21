import React from 'react'
import Base from '../src'

const Link = props =>
  <Base.a
    {...props}
    css={`
      font-weight: bold;
      color: inherit;
    `}
  />

export default Link
