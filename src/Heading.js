
import React from 'react'
import Text from './Text'

const Heading = ({
  level = 2,
  size,
  ...props
}) => {
  const comp = 'h' + level
  size = size || level

  return <Text {...props} is={comp} size={size} />
}

export default Heading

