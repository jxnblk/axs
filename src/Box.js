
import React from 'react'
import withBox from './withBox'

const Box = ({
  is = 'div',
  ...props
}) => (
  React.createElement(is, props)
)

Box.displayName = 'Box'

export default withBox(Box)

