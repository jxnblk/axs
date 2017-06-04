const x = require('reaxe')
const { connect } = require('funcup')
const {
  Flex,
  Box,
  Color,
  Pre
} = require('../src')
const Logo = require('./Logo')
const NavLink = require('./NavLink')
const { nav } = x

const Nav = connect()(props => nav([
  x(Color)({
    color: props.color[5]
  }, ...[
    x(Flex.center)({ py: 3 }, ...[
      x(Logo)({ mr: 2, size: 32 }),
      x(NavLink)({ mr: 2, href: 'http://jxnblk.com/axs' }, 'Axs'),
      x(NavLink)({ mr: 2, href: 'https://github.com/jxnblk/axs' }, 'GitHub'),
      x(NavLink)({ mr: 2, href: 'https://npmjs.com/package/axs' }, 'npm'),
      x(Pre)({ ml: 'auto' }, props.count)
    ])
  ])
]))

module.exports = Nav
