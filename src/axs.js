const h = require('react').createElement
const parse = require('./parse')
module.exports = C => p => h(C, parse(p))
