
import React from 'react'
import withBocxs from './withBocxs'

const Base = ({
  is = 'div',
  ...props
}) => (
  React.createElement(is, props)
)

export default withBocxs(Base)

