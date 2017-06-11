const x = require('reaxe')
const { connect } = require('funcup')
const { Box } = require('../src')

const map = s => ({ color: s.color })

const Bar = connect(map)(props => x(Box)({
  my: 2,
  css: {
    width: 64,
    height: 4,
    backgroundColor: props.color[5]
  }
}))

module.exports = Bar
