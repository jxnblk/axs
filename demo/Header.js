
import React from 'react'
import { Box, Flex, Heading, Text } from '../src'
import Container from './Container'
import Tweet from './Tweet'
import Star from './Star'
import Carbon from './Carbon'
import Pre from './Pre'

export default () => (
  <Box is='header' px3 mb4>
    <Box px3 py4 mb4 white bgGrape>
      <Container py4>
        <Flex css={cx.flex}>
          <Box border='right' css={cx.pipe} pr3 mr3>
            <Heading level={1} size={[1, null, 0]}>
              Axs
            </Heading>
          </Box>
          <Box width={[1, 1/2]}>
            <Text is='p' bold size={[4, 3 ]} mt2>
              A build-your-own responsive typography and layout UI toolkit for React
            </Text>
            <Pre size={4} p0 my2 grape1 children='npm i axs' />
          </Box>
        </Flex>
      </Container>
    </Box>
    <Carbon />
  </Box>
)

const cx = {
  pipe: {
    borderWidth: 4,
    '@media screen and (max-width:40em)': {
      border: 0
    }
  },
  flex: {
    flexWrap: 'wrap',
    alignItems: 'center'
  }
}
