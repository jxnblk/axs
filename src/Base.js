import React from 'react'

import { createCSS, rules } from './css'
import Style from './Style'
import contextTypes from './contextTypes'

class AxsBase extends React.Component {
  static contextTypes = contextTypes

  constructor (props, context) {
    super()

    console.log('context', contextTypes, context)
    this.hasProvider = typeof context.css === 'function'
    this.css = context.css || createCSS

    this.state = {
      className: this.css(props.css),
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

export default AxsBase
