const x = require('reaxe')
const { Text } = require('../src')

const Pre = props => x(Text)({
  ...props,
  is: 'pre',
  css: {
    fontFamily: `'SF Mono', Menlo, monospace`,
    fontSize: 14,
    margin: 0,
    overflow: 'auto'
  }
})

module.exports = Pre
