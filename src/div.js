const h = require('react').createElement
const clean = props => {
  const next = {}
  for (let key in props) {
    if (/^[wmp][trblxy]?-?[0-9]?$/.test(key)) continue
    if (/^(is|width|margin|padding)/.test(key)) continue
    next[key] = props[key]
  }
  return next
}

module.exports = p => h(p.is || 'div', clean(p))
