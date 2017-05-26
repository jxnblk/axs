const h = require('react').createElement
const styled = require('styled-components').default
const attr = require('./attr')

const kebab = s => ('' + s).replace(/[A-Z]|^ms/g, '-$&').toLowerCase()
const x = key => props => props[key] ? (kebab(key) + ':' + props[key] + ';') : null

const clean = props => {
  const next = {}
  for (let key in props) {
    if (/^[wmp][trblxy]?-?[0-9]?$/.test(key)) continue
    if (/^(width|margin|padding)/.test(key)) continue
    next[key] = props[key]
  }
  return next
}
const comp = p => h('div', clean(p))

const base = styled(comp).attrs(attr)

const Box = base`
  ${x('width')}

  ${x('margin')}
  ${x('marginTop')}
  ${x('marginRight')}
  ${x('marginBottom')}
  ${x('marginLeft')}

  ${x('padding')}
  ${x('paddingTop')}
  ${x('paddingRight')}
  ${x('paddingBottom')}
  ${x('paddingLeft')}`

module.exports = Box
