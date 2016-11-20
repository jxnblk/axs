
import React from 'react'
import { Flex, Box, Heading, Text } from '../src'
import Container from './Container'
import Pre from './Pre'
import ExamplePre from './ExamplePre'
import examples from './example-source'

const Examples = () => (
  <Box is='section' px3 py4>
    <Container>
      <Heading mb2 children='Examples' />
      {examples.map((eg, i) => (
        <Box py3 key={i}>
          <Heading level={3} mb2 children={eg.name} />
          <ExamplePre example={eg.comp} />
        </Box>
      ))}
    </Container>
  </Box>
)

export default Examples

