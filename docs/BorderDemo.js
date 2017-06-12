const x = require('reaxe')
const Demo = require('./Demo')

const BorderDemo = props => x(Demo)({
  title: '<Border />',
  code
})

const code = `<Border
  p={2}
  mx='auto'
  width={1/2}
  top
  bottom
  color='tomato'>
  Hello Border
</Border>`

module.exports = BorderDemo
