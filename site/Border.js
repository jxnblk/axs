const x = require('reaxe')
const { connect } = require('funcup')
const { Box } = require('axs')

module.exports = connect()(props => x(Box)({
  ...props,
  css: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: props.color[5]
  }
}))
