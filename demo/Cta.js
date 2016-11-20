
import React from 'react'
import { Box, Text } from '../src'
import Container from './Container'
import Dit from './Dit'

const Cta = () => (
  <Box is='section' px3 py4>
    <Container>
      <Dit />
      <Text size={3} bold>
        Read the docs and get started
      </Text>
      <Text
        is='a'
        href='https://github.com/jxnblk/axs'
        size={2}
        bold
        grape
        children='View on GitHub'
      />
    </Container>
  </Box>
)

export default Cta

