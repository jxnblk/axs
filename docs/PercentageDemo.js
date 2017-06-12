const x = require('reaxe')
const Demo = require('./Demo')

const PercentageDemo = props => x(Demo)({
  title: 'Percentage Bar',
  code
})

const code = `<Flex f6 p2>
  <Color
    p1
    w={3/8}
    color='#fff'
    backgroundColor={color[8]}>
    37.5%
  </Color>
  <Color
    p1
    w={1/4}
    color='#fff'
    backgroundColor={color[6]}>
    25%
  </Color>
  <Color
    p1
    w={1/4}
    color='#fff'
    backgroundColor={color[4]}>
    25%
  </Color>
  <Color
    p1
    w={1/8}
    color='#fff'
    backgroundColor={color[2]}>
    12.5%
  </Color>
</Flex>`

module.exports = PercentageDemo
