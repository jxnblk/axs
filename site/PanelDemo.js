const x = require('reaxe')
const Demo = require('./Demo')

const PanelDemo = props => x(Demo)({
  title: 'Panel',
  code
})

const code = `<Box p2>
  <Border color={color[5]} rounded>
    <Color
      p2
      color='#fff'
      backgroundColor={color[5]}>
      <Text bold>Hello</Text>
    </Color>
    <Box p2>
      Panel
    </Box>
    <Border top f6 p2 color={color[5]}>
      Panel Footer
    </Border>
  </Border>
</Box>`

module.exports = PanelDemo
