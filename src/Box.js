const styled = require('styled-components').default
const div = require('./div')
const attr = require('./attr')

const kebab = s => ('' + s).replace(/[A-Z]|^ms/g, '-$&').toLowerCase()
const x = key => props => props[key] ? (kebab(key) + ':' + props[key] + ';') : null

const base = styled(div).attrs(attr)

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
