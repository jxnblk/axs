const React = require('react')
const contextTypes = require('./context-types')
const h = React.createElement

class ThemeProvider extends React.Component {
  getChildContext () {
    return {
      theme: this.props.theme
    }
  }

  render () {
    return React.Children.only(this.props.children)
  }
}

ThemeProvider.childContextTypes = contextTypes

module.exports = ThemeProvider
