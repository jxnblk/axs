const x = require('reaxe')
const Demo = require('./Demo')

const BarChartDemo = props => x(Demo)({
  title: 'Bar Chart',
  code
})

const code = `<Box f6 p2>
  <Color
    p1
    mb1
    w={1/4}
    color='#fff'
    backgroundColor={color[7]}>
    25%
  </Color>
  <Color
    p1
    w={3/4}
    color='#fff'
    backgroundColor={color[5]}>
    75%
  </Color>
</Box>`

module.exports = BarChartDemo
