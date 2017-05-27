const React = require('react')
const { css } = require('glamor')
const {
  Box,
  Flex,
  Text
} = require('../src')
css.global('*', {
  boxSizing: 'border-box'
})
css.global('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  lineHeight: 1.5,
  margin: 0,
})

const dark = n => `rgba(0, 0, 0, ${n})`

module.exports = props => (
  <div>
    <Flex css={{ backgroundColor: 'tomato' }}>
      <Box p2 w={[ 1, 1/2 ]}
        css={{
          backgroundColor: dark(1/4)
        }}>
        <Text fs={5}>Axs</Text>
      </Box>
    </Flex>
  </div>
)
