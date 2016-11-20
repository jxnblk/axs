
import React from 'react'
import withAxs from './withAxs'

const Text = ({
  is = 'p',
  ...props
}) => (
  React.createElement(is, props)
)

Text.displayName = 'Text'

export default withAxs(Text)

