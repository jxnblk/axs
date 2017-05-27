const React = require('react')
const { injectGlobal } = require('styled-components')
const {
  Box,
  Flex,
  Heading,
  Text,
} = require('../src')

injectGlobal`
* { box-sizing: border-box }
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  margin: 0;
}
`

module.exports = () => (
  <Box p2>
    <Heading
      m={4}
      p={2}
      w={1/2}
      fontSize={7}
      children='Axs2' />
    <Flex.wrap>
      <Box
        p={[ 1, 2, 3, 4 ]}
        w={[ 1, 1/2, 1/4 ]}
        style={{
          backgroundColor: 'tomato'
        }}
        children='Flex'
      />
      <Box
        p={[ 1, 2, 3, 4 ]}
        w={[ 1, 1/2, 1/4 ]}
        style={{
          backgroundColor: 'tomato'
        }}
        children='Box'
      />
      <Box
        p={[ 1, 2, 3, 4 ]}
        w={[ 1, 1/2, 1/4 ]}
        style={{
          backgroundColor: 'tomato'
        }}
        children='Flex'
      />
      <Box
        p={[ 1, 2, 3, 4 ]}
        w={[ 1, 1/2, 1/4 ]}
        style={{
          backgroundColor: 'tomato'
        }}>
        <Text
          p={2}
          m={4}
          fs={7}
          css={`color:white;`}
          children='Text p2' />
      </Box>
    </Flex.wrap>
    <Text.tomato fs={6} children='Tomato' />
  </Box>
)
