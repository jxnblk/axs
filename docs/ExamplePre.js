
import React from 'react'
import toJsxString from 'react-element-to-jsx-string'
import { Box, Text } from '../src'
import Pre from './Pre'

const ExamplePre = ({
  example
}) => {
  const code = toJsxString(example)

  return (
    <Box>
      <Box p2>
        {example}
      </Box>
      <Pre size6 bgGray2 p2 children={code} />
    </Box>
  )
}

export default ExamplePre

