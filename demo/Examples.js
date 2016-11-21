
import React from 'react'
import { Box, Text } from '../src'
import { Flex, Heading } from 'axs-ui'
import Container from './Container'
import ExamplePre from './ExamplePre'
import Link from './Link'
import examples from './example-source'

const Examples = () => (
  <Container is='section' py4>
    <Heading mb2 children='Examples' />
    <Text>
      Some of the examples below use components from the optional <Link to='/ui'>axs-ui</Link> package.
    </Text>
    {examples.map((eg, i) => (
      <Box py3 key={i}>
        <Heading level={3} mb2 children={eg.name} />
        <ExamplePre example={eg.comp} />
      </Box>
    ))}
  </Container>
)

export default Examples

