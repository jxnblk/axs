
import React from 'react'
import Text from './Text'

const Heading = ({
  level = 2,
  size,
  css,
  ...props
}) => {
  const comp = 'h' + level
  size = size || level

  return (
    <Text {...props}
      is={comp}
      size={size}
      css={{
        lineHeight: 1.25,
        ...css
      }}
    />
  )
}

Heading.displayName = 'Heading'

export default Heading

