const addpx = require('add-px-to-style')
const kebab = s => ('' + s).replace(/[A-Z]|^ms/g, '-$&').toLowerCase()

const dec = (key, val) => kebab(key) + ':' + addpx(key, val) + ';'
const media = (m, key, val) => m + '{' + dec(key, val) + '}'


const breakpoints = [ 40, 52, 64 ]
  .map(n => `@media screen and (min-width:${n}em)`)

const bp = key => props => props[key]
  ? props[key].map((v, i) => i === 0
    ? dec(key, v)
    : media(breakpoints[i - 1], key, v)).join('')
  : null

const AR = /^(width|margin|padding|fontSize)/

module.exports = props => {
  let css = ''
  for (let key in props) {
    if (!AR.test(key)) continue
    css += bp(key)(props)
  }
  if (props.css) css += props.css
  return css
}
