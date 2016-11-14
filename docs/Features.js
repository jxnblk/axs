
import React from 'react'
import { Flex, Box, Text, Heading } from '../src'

const Features = () => (
  <Box is='section' px3 py4>
    <Flex mx-3>
      <Box px3 sm={1/2}>
      </Box>
      <Box px3 sm={1/2}>
        <Heading children='The Power of CSS in JavaScript' />
        <Text>
          Combined with the functional UI conventions of React,
          Axs blah blah
        </Text>
      </Box>
    </Flex>
  </Box>
)

export default Features

