
import React from 'react'
import toJsxString from 'react-element-to-jsx-string'
import { Box, Text } from '../src'
import { Flex, Heading } from 'axs-ui'
import Container from './Container'
import Pre from './Pre'

const example = (
  <Box p2 mb2 white bgGrape>
    <Text is='h2' size2>
      Box
    </Text>
  </Box>
)

const Usage = () => (
  <Container>
    <Heading children='Usage' />
    <Flex mx-2 py3 css={{ alignItems: 'center' }}>
      <Box px2 width={[1, 1/2]}>
        <Pre bgGray0 children={toJsxString(example)} />
      </Box>
      <Box px2 width={[1, 1/2]}>
        {example}
      </Box>
    </Flex>
  </Container>
)

export default Usage

