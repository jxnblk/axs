const x = require('reaxe')
const { connect } = require('funcup')
const { Box } = require('../src')

const Border = connect()(props => x(Box)({
  ...props,
  css: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: props.color[5]
  }
}))
module.exports = Border
