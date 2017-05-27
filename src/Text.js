const styled = require('styled-components').default
const Box = require('./Box')
const axs = require('./axs')

const Base = Box.extend`margin:0;`.withComponent('p')

const Text = axs(Base)
Text.extend = Base.extend
Text.withComponent = Base.withComponent

Text.tomato = Text.extend`color:tomato;`

module.exports = Text
