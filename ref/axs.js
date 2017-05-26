// Doesn't work as-expected with styled-components
const h = require('react').createElement
const parse = require('./parse')
const axs = C => p => h(C, parse(p))
module.exports = axs
