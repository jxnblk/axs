const styled = require('styled-components').default
const axs = require('./axs')

const dec = (key, val) => key + ':' + val + ';'
const media = (m, key, val) => m + '{' + dec(key, val) + '}'

const breakpoints = [ 40, 52, 64 ]
  .map(n => `@media screen and (min-width:${n}em)`)

const bp = key => props => props[key]
  ? props[key].map((v, i) => i === 0
    ? dec(key, v)
    : media(breakpoints[i - 1], key, v)).join('')
  : null

const AR = /^(width|margin|padding|fontSize)/
const sx = props => {
  let css = ''
  for (let key in props) {
    if (!AR.test(key)) continue
    css += bp(key)(props)
  }
  return css
}

const Base = styled.div([], sx)

const Box = axs(Base)
Box.withComponent = Base.withComponent
Box.extend = Base.extend

module.exports = Box
