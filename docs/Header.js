
import React from 'react'
import { Box, Flex, Heading, Text } from '../src'
import Container from './Container'
import Tweet from './Tweet'
import Star from './Star'
import Carbon from './Carbon'
import Pre from './Pre'

export default () => (
  <Box is='header' px3 mb4>
    <Box px3 py4 mb4 grape bgGray3>
      <Container>
        <Heading level={1} size={[1, null, 0]} my4>
          Axs
        </Heading>
      </Container>
    </Box>
    <Container>
      <Flex mx-2 css={cx.flex}>
        <Box px2 width={[1, 1/2]}>
          <Text is='p' bold size={[4, 3 ]} mb2>
            A build-your-own responsive typography and layout UI toolkit for React
          </Text>
        </Box>
        <Box px2 width={[1, 1/2]}>
          <Pre bgGray1 children='npm i axs' />
        </Box>
      </Flex>
    </Container>
    <Carbon />
  </Box>
)

const cx = {
  flex: {
    flexWrap: 'wrap',
    alignItems: 'center'
  }
}
