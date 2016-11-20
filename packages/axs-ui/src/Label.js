
import React from 'react'
import { Text } from 'axs'

const Label = (props) => (
  <Text
    is='label'
    size5
    gray8
    display='block'
    width={1}
    {...props}
  />
)

export default Label

