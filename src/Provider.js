import React from 'react'
import { renderToString } from 'react-dom/server'

import { createCSS, rules } from './css'
import Style from './Style'
import contextTypes from './contextTypes'

class Provider extends React.Component {
  static childContextTypes = contextTypes

  constructor (props) {
    super()

    this.preRender = children => {
      renderToString(children)
    }
    this.preRender(props.children)
  }

  componentWillReceiveProps (next) {
    // look for a way around this
    // this is essentially a double render
    if (next.children !== this.props.children) {
      this.preRender(next.children)
    }
  }

  getChildContext () {
    return {
      css: createCSS
    }
  }

  render () {
    return (
      <React.Fragment>
        <Style css={rules.join('')} />
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default Provider
