const axs = require('./axs')

const style = {
  display: 'flex'
}

const Flex = axs(style)('div')

Flex.center = axs({
  display: 'flex',
  alignItems: 'center'
})('div')

Flex.wrap = axs({
  display: 'flex',
  flexWrap: 'wrap'
})('div')

module.exports = Flex
