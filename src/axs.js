const h = require('react').createElement
const { css } = require('glamor')
const classnames = require('classnames')
const contextTypes = require('./context-types')
const parse = require('./parse')
const _config = require('./config')

/*
 * Higher order component
 * with support for `css` prop and style props
 */

module.exports = _style => Component => {
  const AxsComponent = (_props, context) => {
    const config = Object.assign({}, _config, context.axs)
    const parsed = parse(_props, config)

    const style = Object.assign({}, _style, parsed.css)
    const hasStyle = Object.keys(style).length

    const cn = hasStyle ? css(style).toString() : null

    const props = Object.assign({}, parsed, {
      className: classnames(parsed.className, cn),
    })

    const tag = props.is || Component

    delete props.css
    delete props.is

    return h(tag, props)
  }

  AxsComponent.contextTypes = contextTypes
  // AxsComponent.displayName = Component.displayName

  return AxsComponent
}
