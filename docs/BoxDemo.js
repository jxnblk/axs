const x = require('reaxe')
const Demo = require('./Demo')

const BoxDemo = props => x(Demo)({
  title: '<Box />',
  code
})

const code = `<Box
  p={2}
  mx='auto'
  width={1/2}
  css={{
    backgroundColor: '#fff'
  }}>
  Hello Box
</Box>`

module.exports = BoxDemo
