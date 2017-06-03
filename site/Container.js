const x = require('reaxe')
const { Box } = require('axs')

module.exports = props => x(Box)({
  ...props,
  mx: 'auto',
  css: {
    maxWidth: 1024
  }
})
