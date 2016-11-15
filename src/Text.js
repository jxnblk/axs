
import React from 'react'
import withText from './withText'

const Text = ({
  is = 'p',
  ...props
}) => (
  React.createElement(is, props)
)

Text.displayName = 'Text'

export default withText(Text)

