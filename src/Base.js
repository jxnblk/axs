import React from 'react'
import objss from 'objss'

import { createCSS, rules } from './css'
import Style from './Style'
import contextTypes from './contextTypes'

export const compose = (...funcs) =>
  funcs.reduce((a, b) => (...args) => a(b(...args)))

class AxsBase extends React.Component {
  static contextTypes = contextTypes

  static defaultProps = {
    // todo: rename
    funcs: []
  }

  constructor (props, context) {
    super()

    this.hasProvider = typeof context.css === 'function'
    this.css = context.css || createCSS

    const style = props.funcs
      .map(fn => fn(props))
      .map(obj => objss(obj))
      .join('')

    this.state = {
      className: this.css(props.css, style),
    }
  }

  componentWillReceiveProps (next) {
    if (next.css === this.props.css) return
    const className = this.css(next.css)
    this.setState({
      className
    })
  }

  render () {
    const {
      is = 'div',
      css,
      innerRef,
      funcs = [],
      ...props
    } = this.props
    const { className } = this.state

    const Comp = is

    return (
      <React.Fragment>
        <Comp {...props}
          ref={innerRef}
          css={typeof Comp === 'function' ? css : null}
          className={className}
        />
        {!this.hasProvider && <Style css={rules.join('')} />}
      </React.Fragment>
    )
  }
}

/*
 * <Base
 *   {...props}
 *   css=''
 *   funcs={[
 *     color,
 *     space,
 *     fontSize
 *   ]}
 * />
 * - getStyles
 * - styleFunctions
 * - accessors
 * - styleGetters
 * - dynamics
*/

export default AxsBase
