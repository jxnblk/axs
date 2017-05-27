const h = require('react').createElement
const glamor = require('glamor')
const parse = require('./parse')
const css = require('./css')
const axs = sx => {
  const c0 = glamor.css(sx).toString()
  return c => p => h(p.is || c, css(parse(p)))
}
module.exports = axs
