const styled = require('styled-components').default
const div = require('./div')
const attr = require('./attr')
const sx = require('./sx')

const base = styled(div).attrs(attr)

const Box = base`
  ${sx('width')}
  ${sx('margin')}
  ${sx('marginTop')}
  ${sx('marginRight')}
  ${sx('marginBottom')}
  ${sx('marginLeft')}
  ${sx('padding')}
  ${sx('paddingTop')}
  ${sx('paddingRight')}
  ${sx('paddingBottom')}
  ${sx('paddingLeft')}`

module.exports = Box
