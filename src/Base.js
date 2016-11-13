
import React from 'react'
import withBox from './withBox'

const Base = ({
  is = 'div',
  ...props
}) => (
  React.createElement(is, props)
)

export default withBox(Base)

