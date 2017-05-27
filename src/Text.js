const styled = require('styled-components').default
const Box = require('./Box')
const Text = Box.extend`margin:0;`.withComponent('p')
Text.span = Text.withComponent('span')

module.exports = Text
