
import React from 'react'
import { Flex, Box, Text } from '../src'
import ExamplePre from './ExamplePre'

const eg = (
  <Flex css={{
    flexWrap: 'wrap'
  }}>
    <Box width={[1, 1/2, 1/4]} p2 bgGray1>Box</Box>
    <Box width={1} sm={1/2} md={1/4} p2 bgGray2>Box</Box>
    <Box width={1} sm={1/2} md={1/4} p2 bgGray1>Box</Box>
    <Box width={1} sm={1/2} md={1/4} p2 bgGray2>Box</Box>
  </Flex>
)

const GridExample = () => (
  <ExamplePre example={eg} />
)

export default GridExample

