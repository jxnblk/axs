
import React from 'react'
import toJsxString from 'react-element-to-jsx-string'
import { Box, Text } from '../src'
import { Flex, Heading } from 'axs-ui'
import Container from './Container'
import Pre from './Pre'
import BasicLink from './BasicLink'

const example = (
  <Box p2 mb2 white bgFuschia>
    <Text is='h2' fontSize={2}>
      Box
    </Text>
  </Box>
)

const Usage = () => (
  <Container id='usage'>
    <Heading>
      <BasicLink href='#usage'>
        Usage
      </BasicLink>
    </Heading>
    <Flex mx-2 py3 flexWrap='wrap' alignItems='center'>
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

