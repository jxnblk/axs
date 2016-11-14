
import React from 'react'
import withText from './withText'

const Text = ({
  is = 'p',
  ...props
}) => (
  React.createElement(is, props)
)

export default withText(Text)

