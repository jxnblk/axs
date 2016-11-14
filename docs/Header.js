
import React from 'react'
import { Box, Flex, Heading, Text } from '../src'
import Container from './Container'
import Tweet from './Tweet'
import Star from './Star'
import Carbon from './Carbon'
import Pre from './Pre'

const Space = () => <Box css={cx.space} />

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
      <Text is='p' bold size={[4, 3 ]} mb2>
        React UI component primitive toolkit
      </Text>
      <Pre bgGray1 children='npm i axs' />
    </Container>
    <Carbon />
  </Box>
)

const cx = {
  flex: {
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  space: {
    flex: '1 1 auto'
  }
}
