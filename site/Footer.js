const x = require('reaxe')
const { connect } = require('funcup')
const {
  Flex,
  Color
} = require('axs')
const NavLink = require('./NavLink')

module.exports = connect()(props => x(Color)({
  is: 'footer',
  color: props.color[5]
}, ...[
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
    ])
]))
