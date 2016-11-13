
import React from 'react'
import Text from './Text'

const Heading = ({
  level = 2,
  ...props
}) => {
  const comp = 'h' + level
  return <Text {...props} is={comp} />
}

export default Heading

