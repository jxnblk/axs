const { compose } = require('./util')
const kebab = s => ('' + s).replace(/[A-Z]|^ms/g, '-$&').toLowerCase()

const sx = key => val => kebab(key) + ':' + val + ';'

const breakpoints = [
  '40em',
  '52em',
  '64em',
].map(b => `@media screen and (min-width:${b})`)

const bp = s => v => !Array.isArray(v)
  ? s(v)
  : v.map(s)
  .map((d, i) => i > 0 ? `${breakpoints[i - 1]}{${d}}` : d)
  .join('')

const val = key => props => props[key] ? props[key] : null

const x = key => compose(
  bp(sx(key)),
  val(key)
)

module.exports = x
