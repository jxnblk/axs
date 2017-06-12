const x = require('reaxe')
const { Box } = require('../src')

const Container = props => x(Box)({
  ...props,
  mx: 'auto',
  css: {
    maxWidth: 1024
  }
})

module.exports = Container
