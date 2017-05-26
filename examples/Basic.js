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
    <Flex.wrap>
      <Box p2 w={[ 1, 1/2 ]} children='Box' />
      <Box p2 w={[ 1, 1/2 ]} children='Box' />
    </Flex.wrap>
    <Box
      p={[ 1, 2, 3, 4 ]}
      style={{ backgroundColor: 'tomato' }}>
      Responsive Padding
    </Box>
    <Box
      style={{ backgroundColor: 'tomato' }}
      m={[ 1, 2, 3, 4 ]}
      w={[ 1/2, 1/3, 1/4, 1/5 ]}
      children='Responsive Widths'
    />
  </Box>
)

