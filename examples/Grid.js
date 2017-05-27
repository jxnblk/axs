const React = require('react')
const Box = require('../src/Box')
const Text = require('../src/Text')

module.exports = () => (
  <Box>
    <Text fs={6} children='Axs' />
    <Box
      p={2}
      m={[ 1, 2, 3, 4 ]}
      w={[ 1, 1/2, 1/4 ]}
      style={{
        backgroundColor: 'tomato'
      }}>
      Half
    </Box>
  </Box>
)
