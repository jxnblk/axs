const x = require('reaxe')
const { connect } = require('funcup')
const {
  Flex,
  Box,
  Heading,
  Color,
} = require('../src')
const Pre = require('./Pre')
const Demo = require('./Demo')

const Usage = connect()(props => (
  x(Box)({
    px: 3,
    py: 4,
  }, [
    x(Demo)({
      title: 'Usage',
      height: '416px',
      code: example
    }),
  ])
))

const example = `<Box p={3}>
  <Flex mx={-2}
    css={{
      alignItems: 'baseline'
    }}>
    <Box width={2/3} px={2}>
      <Heading fontSize={1}>
        Hello
      </Heading>
    </Box>
    <Box width={1/3} px={2}>
      <Text fontSize={3}>
        Axs
      </Text>
    </Box>
  </Flex>
</Box>`

module.exports = Usage
