const x = require('reaxe')
const { connect } = require('funcup')
const {
  Flex,
  Color
} = require('../src')
const NavLink = require('./NavLink')
const Logo = require('./Logo')
const { inc } = require('./updaters')

module.exports = connect()(props => x(Color)({
  is: 'footer',
  color: props.color[5]
}, ...[
  x(Flex)({ py: 4 }, ...[
    x(Logo)({
      mx: 'auto',
      onClick: e => props.update(inc)
    })
  ]),
  x(Flex.center)({ py: 4 }, ...[
    x(NavLink)({
      mr: 2,
      href: '#',
      children: 'Top'
    }),
    x(NavLink)({
      mr: 2,
      href: 'https://github.com/jxnblk/axs',
      children: 'GitHub'
    }),
    x(NavLink)({
      mr: 2,
      href: 'https://npmjs.com/package/axs',
      children: 'npm'
    }),
    x(NavLink)({
      ml: 'auto',
      href: 'http://jxnblk.com',
      children: 'Made by Jxnblk'
    }),
  ]),
]))
