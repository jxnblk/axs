const x = require('reaxe')
const { Text } = require('../src')

module.exports = props => x(Text)({
  ...props,
  is: 'a',
  css: {
    ...props.css,
    fontWeight: 700,
    fontSize: 12,
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '.2em',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
})
