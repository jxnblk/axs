const x = require('reaxe')
const { Box } = require('axs')

module.exports = props => x(Box)({
  ...props,
  px: [ 2, null, 3, 4 ]
})
