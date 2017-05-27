const { css } = require('glamor')
const classnames = require('classnames')

const PR = /^(is|css)$/
const CR = /^(width|margin|padding|fontSize|@media|is|css)/

module.exports = (props, c0) => {
  const next = {}
  const sx = {}

  for (let key in props) {
    if (!CR.test(key)) {
      next[key] = props[key]
      continue
    }

    if (!PR.test(key)) {
      sx[key] = props[key]
    }
  }

  const hassx = Object.keys(sx).length
  const c1 = hassx ? css(sx).toString() : null
  const c2 = props.css ? css(props.css).toString() : null
  next.className = classnames(next.className, c0, c1, c2)

  return next
}
