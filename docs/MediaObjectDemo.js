const x = require('reaxe')
const Demo = require('./Demo')

const MediaObjectDemo = props => x(Demo)({
  title: 'Media Object',
  code
})

const code = `<Flex.center>
  <Box m2>
    <img
      width={128}
      height={128}
      src='http://placehold.it/256/ff6347/fff?text=Axs'
    />
  </Box>
  <Box w={1}>
    <Text f={3}>Hello</Text>
    <Text>
      Try changing the example code below
    </Text>
  </Box>
</Flex.center>`

module.exports = MediaObjectDemo
