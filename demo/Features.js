
import React from 'react'
import { Flex, Box, Text, Heading } from '../src'
import Container from './Container'
import Dit from './Dit'

const Features = () => (
  <Box is='section' px3>
    <Container>
      <Flex mx-3 css={cx.flex}>
        <Box p3 width={[1, 1/2]}>
          <Dit />
          <Heading size={3} mb2 children='Responsive Typography and Layout' />
          <Text>
            Axs is an abstraction of the most common responsive typographic and layout styling concerns in the form of two UI component primitives.
          </Text>
        </Box>
        <Box p3 width={[1, 1/2]}>
          <Dit />
          <Heading size={3} mb2 children='From Prototype to UI Library' />
          <Text>
            Axs is intended as a way to quickly prototype new UI, handle one-off styles,
            and serve as a foundation for creating your own custom UI component libraries.
          </Text>
        </Box>
        <Box p3 width={[1, 1/2]}>
          <Dit />
          <Heading size={3} mb2 children='UI Component Primitives' />
          <Text>
            Use the Box component as a starting point for any visual containers or grid systems in your app.
            Use the Text component for headings, labels, messages, or any other UI typography.
          </Text>
        </Box>
        <Box p3 width={[1, 1/2]}>
          <Dit />
          <Heading size={3} mb2 children='The Power of CSS in JavaScript' />
          <Text>
            Each Axs component handles CSS-in-JS with the <code>css</code> prop,
            with support for media queries and pseudoclasses,
            to allow for any fine-tuned styling needs.
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
)

const cx = {
  flex: {
    flexWrap: 'wrap'
  }
}

export default Features

