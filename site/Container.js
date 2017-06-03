const x = require('reaxe')
const { Box } = require('../src')

module.exports = props => x(Box)({
  ...props,
  mx: 'auto',
  css: {
    maxWidth: 1024
  }
})
