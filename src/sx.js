const {
  compose,
  kebab,
  map,
  arr,
  join
} = require('./util')

const dec = key => val => kebab(key) + ':' + val + ';'

const breakpoints = [
  '40em',
  '52em',
  '64em',
].map(b => `@media screen and (min-width:${b})`)

const bp = (dec, i) => i > 0 ? `${breakpoints[i - 1]}{${dec}}` : dec
const val = key => props => props[key].length ? props[key] : null

module.exports = key => compose(
  join,
  map(bp),
  map(dec(key)),
  arr,
  val(key)
)
