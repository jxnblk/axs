const styled = require('styled-components').default
const Box = require('./Box')

const Flex = styled(Box)`display: flex;`
Flex.wrap = Flex.extend`flex-wrap: wrap;`
Flex.center = Flex.extend`align-items:center;`

module.exports = Flex
