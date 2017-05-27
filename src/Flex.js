const axs = require('./axs')

const Flex = axs({ display: 'flex' })('div')
// Flex.wrap = axs({ display: 'flex', flexWrap: 'wrap' })('div')
// Flex.center = axs({ display: 'flex', alignItems: 'center' })('div')

module.exports = Flex
