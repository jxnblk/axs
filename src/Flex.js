const Box = require('./Box')

const Flex = Box.extend`display:flex;`
Flex.wrap = Flex.extend`flex-wrap:wrap;`
Flex.center = Flex.extend`align-items:center;`

module.exports = Flex
