
import React from 'react'
import { Box, Text } from '../src'
import { Flex, Heading } from 'axs-ui'
import Container from './Container'
import ExamplePre from './ExamplePre'
import Link from './Link'
import BasicLink from './BasicLink'
import examples from './example-source'

const Examples = () => (
  <Container is='section' id='examples' py4>
    <Heading mb2>
      <BasicLink href='#examples'>
        Examples
      </BasicLink>
    </Heading>
    <Text>
      Some of the examples below use components from the optional <Link to='/ui'>axs-ui</Link> package.
    </Text>
    {examples.map((eg, i) => (
      <Box id={eg.name} py3 key={i}>
        <Heading level={3} mb2>
          <BasicLink href={`#${eg.name}`}>
            {eg.name}
          </BasicLink>
        </Heading>
        <ExamplePre example={eg.comp} />
      </Box>
    ))}
  </Container>
)

export default Examples

