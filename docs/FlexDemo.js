const x = require('reaxe')
const Demo = require('./Demo')

const FlexDemo = props => x(Demo)({
  title: '<Flex />',
  code
})

const code = `<Box px={3}>
  <Flex
    p={2}
    css={{
      backgroundColor: '#fff'
    }}>
    <Box px={2}>
      Hello
    </Box>
    <Box px={2} ml='auto'>
      Flex
    </Box>
  </Flex>
</Box>`

module.exports = FlexDemo
