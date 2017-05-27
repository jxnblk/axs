const styled = require('styled-components').default
const axs = require('./axs')
const sx = require('./sx')

const Base = styled.div([], sx)
const Box = axs(Base)

Box.withComponent = Base.withComponent
Box.extend = Base.extend

module.exports = Box
