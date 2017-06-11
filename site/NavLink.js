const x = require('reaxe')
const { Text } = require('../src')

const NavLink = props => x(Text)({
  ...props,
  is: 'a',
  css: {
    ...props.css,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontWeight: 700,
    fontSize: 10,
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '.2em',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
})

module.exports = NavLink
