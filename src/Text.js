const Box = require('./Box')

const Text = Box.withComponent('p')
Text.span = Box.withComponent('span')
Text.div = Box.withComponent('div')

module.exports = Text
