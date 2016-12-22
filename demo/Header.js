
import React from 'react'
import { Box, Text } from '../src'
import { Flex, Heading } from 'axs-ui'
import Container from './Container'
import Tweet from './Tweet'
import Star from './Star'
import Carbon from './Carbon'
import Pre from './Pre'
import Dit from './Dit'

export default () => (
  <Box is='header' px3 mb4>
    <Box py4 mb4 white bgFuschia>
      <Container py4>
        <Flex wrap align='center'>
          <Box borderRight={4} css={cx.pipe} pr3 mr3>
            <Heading level={1} fontSize={[1, null, 0]}>
              Axs
            </Heading>
          </Box>
          <Box width={[1, 1/2]}>
            <Text is='p' bold fontSize={[4, 3 ]} mt2>
              A build-your-own responsive typography and layout UI toolkit for React
            </Text>
            <Pre fontSize={4} p0 my2 fuschia1 children='npm i axs' />
          </Box>
        </Flex>
      </Container>
    </Box>
    <Flex wrap align='center'>
      <Box width={[1, null, 4/8 ]}>
        <Dit />
        <Text fontSize={3}>
          Axs is a React UI component library
          that serves as a foundation for highly customized UI
          as well as a utility belt for prototyping.
        </Text>
      </Box>
      <Carbon ml={[ null, null, 'auto' ]} />
    </Flex>
  </Box>
)

const cx = {
  pipe: {
    borderWidth: 4,
    '@media screen and (max-width:40em)': {
      border: 0
    }
  }
}
