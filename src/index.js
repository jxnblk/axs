import React from 'react'
import PropTypes from 'prop-types'
import stylis from 'stylis'
import tags from 'html-tags'

let _id = 0
let cache = {}
const uuid = () => 'x' + (_id++).toString(36)

const createCSS = css => {
  const className = cache[css] || uuid()
  const rules = stylis('.' + className, css)
  const cached = !!cache[css]
  cache[css] = className

  // This might need adjustments
  if (cached) return { rules: false, className }

  return { rules, className }
}

const reset = () => {
  _id = 0
  cache = {}
}

export const Style = props => (
  <style
    dangerouslySetInnerHTML={{
      __html: props.css
    }}
  />
)

export class Base extends React.Component {
  static reset = reset

  static propTypes = {
    css: PropTypes.string,
    innerRef: PropTypes.func,
    is: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ])
  }

  static defaultProps = {
    is: 'div',
    css: ''
  }

  constructor (props) {
    super()

    this.state = createCSS(props.css)
  }

  componentWillReceiveProps (next) {
    if (next.css === this.props.css) return
    delete cache[this.props.css]
    const nextState = createCSS(next.css)
    this.setState(nextState)
  }

  render () {
    const {
      is,
      css,
      innerRef,
      ...props
    } = this.props
    const { rules, className } = this.state
    const Comp = is

    if (typeof Comp === 'function') {
      return <Comp {...this.props} is={undefined} />
    }

    return (
      <React.Fragment>
        {rules && <Style css={rules} />}
        <Comp
          {...props}
          ref={innerRef}
          className={className}
        />
      </React.Fragment>
    )
  }
}

tags.forEach(tag => {
  Base[tag] = props => <Base {...props} is={tag} />
})

export default Base
