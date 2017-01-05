
import React from 'react'
import { Text } from 'axs'

const Heading = ({
  level = 2,
  fontSize,
  ...props
}) => {
  const comp = 'h' + level
  fontSize = fontSize || level

  return (
    <Text
      fontSize={fontSize}
      bold
      {...props}
      is={comp}
      _css={{
        lineHeight: 1.25
      }}
    />
  )
}

Heading.displayName = 'Heading'

export default Heading

