
import React from 'react'
import { Text } from 'axs'

const Label = (props) => (
  <Text
    is='label'
    fontSize={5}
    gray8
    display='block'
    width={1}
    {...props}
  />
)

Label.displayName = 'Label'

export default Label

