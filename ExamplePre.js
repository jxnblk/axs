
import React from 'react'
import toJsxString from 'react-element-to-jsx-string'
import { Box, Text } from '../src'
import Pre from './Pre'

const ExamplePre = ({
  example
}) => {
  const code = toJsxString(example)

  return (
    <Box border rounded borderGray3>
      <Box p2>
        {example}
      </Box>
      <Pre bgGray0 p2 mb0 children={code} />
    </Box>
  )
}

export default ExamplePre

