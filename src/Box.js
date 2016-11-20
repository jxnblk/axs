
import React from 'react'
import withAxs from './withAxs'

const Box = ({
  is = 'div',
  ...props
}) => (
  React.createElement(is, props)
)

Box.displayName = 'Box'

export default withAxs(Box)

