const x = require('reaxe')
const Demo = require('./Demo')

const CardDemo = props => x(Demo)({
  title: 'Card',
  code
})

const code = `<Box p2>
  <Box w={256} mx='auto'>
    <Border rounded color={color[3]}>
      <Box
        is='img'
        w={1}
        width={256}
        height={256}
        src='http://placehold.it/512/ff6347/fff?text=Axs'
        css={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
      <Box p1>
        <Text bold>Hello Card</Text>
      </Box>
    </Border>
  </Box>
</Box>`

module.exports = CardDemo
