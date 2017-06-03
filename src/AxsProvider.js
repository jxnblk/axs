const React = require('react')
const contextTypes = require('./context-types')
const h = React.createElement

class AxsProvider extends React.Component {
  getChildContext () {
    return {
      axs: this.props
    }
  }

  render () {
    const children = React.Children.only(this.props.children)
    return children
  }
}

AxsProvider.childContextTypes = contextTypes

module.exports = AxsProvider
