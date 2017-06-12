const x = require('reaxe')
const { Box } = require('../src')

const Wrap = props => x(Box)({
  ...props,
  px: [ 2, null, 3, 4 ]
})

module.exports = Wrap
