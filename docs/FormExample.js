
import React from 'react'
import { Box, Text, colors } from '../src'
import ExamplePre from './ExamplePre'

const example = (
  <Box>
    <Text
      is='label'
      size6
      display='block'
      gray6>
      Email
    </Text>
    <Box is='input'
      type='text'
      name='email'
      display='block'
      width={1}
      p1
      rounded
      border
      borderGray4
      css={{
        fontFamily: 'inherit',
        fontSize: 'inherit',
        color: 'inherit',
        backgroundColor: 'transparent',
        ':focus': {
          outline: 'none',
          borderColor: colors.blue
        }
      }}
    />
  </Box>
)
const FormExample = () => {
  return (
    <ExamplePre example={example} />
  )
}

export default FormExample

