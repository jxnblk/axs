const x = require('reaxe')
const Demo = require('./Demo')

const TextDemo = props => x(Demo)({
  title: '<Text />',
  code
})

const code = `<Text
  fontSize={[ 2, 1, 0 ]}
  center
  my={2}>
  Hello Text
</Text>`

module.exports = TextDemo
