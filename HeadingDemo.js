const x = require('reaxe')
const Demo = require('./Demo')

const HeadingDemo = props => x(Demo)({
  title: '<Heading />',
  code
})

const code = `<Heading
  is='h3'
  fontSize={[ 2, 1, 0 ]}
  px={3}
  my={2}>
  Hello Heading
</Heading>`

module.exports = HeadingDemo
