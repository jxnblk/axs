const styled = require('styled-components').default
const React = require('react')
const { injectGlobal } = require('styled-components')
const {
  Box,
  Flex,
  Text
} = require('../src')

injectGlobal`
*{ box-sizing: border-box }
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  margin: 0;
}
`

const BlueBox = Box.extend`
  color: white;
  background-color: #07c;
`

module.exports = props => (
  <Box>
    <Flex.center py={4}>
      <Box
        is='h2'
        m={4}
        width={1/2}
        style={{
          backgroundColor: 'tomato'
        }}
        children='Half Width'
      />
      <BlueBox ml='auto'>
        Right Box
      </BlueBox>
    </Flex.center>
    <Text py={0}>Hello</Text>
  </Box>
)

