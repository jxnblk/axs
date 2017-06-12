const x = require('reaxe')
const Demo = require('./Demo')

const ColorDemo = props => x(Demo)({
  title: '<Color />',
  code
})

const code = `<Color
  p={2}
  mx='auto'
  width={1/2}
  color='white'
  backgroundColor='tomato'
  >
  Hello Color
</Color>`

module.exports = ColorDemo
