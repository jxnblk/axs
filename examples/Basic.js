const styled = require('styled-components').default
const React = require('react')
const { injectGlobal } = require('styled-components')
const {
  Box,
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

module.exports = props => (
  <Box>
    <Box
      m={4}
      width={1/2}
      style={{
        backgroundColor: 'tomato'
      }}
      children='Half Width'
    />
    <Text.span>Hello</Text.span>
  </Box>
)

