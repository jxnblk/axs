
import React from 'react'
import withBox from './withBox'

const Box = ({
  is = 'div',
  ...props
}) => (
  React.createElement(is, props)
)

export default withBox(Box)

