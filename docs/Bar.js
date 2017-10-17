const x = require('reaxe')
const connect = require('refunk')
const { Box } = require('..')

const Bar = connect(props => x(Box)({
  my: 2,
  css: {
    width: 64,
    height: 4,
    backgroundColor: props.color[5]
  }
}))

module.exports = Bar
