const x = require('reaxe')
const { connect } = require('funcup')
const { Chevron } = require('reline')
const { Flex, Color } = require('../src')
const Button = require('./Button')
const NavLink = require('./NavLink')
const Logo = require('./Logo')
const { dec, inc } = require('./updaters')

const Footer = connect()(props => x(Color)({
  is: 'footer',
  color: props.color[5],
  css: {
    // position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
  }
}, ...[
  x(Flex.center)({
    px: [ 2, 3 ],
    py: 2,
    css: {
      height: 64,
    }
  }, ...[
    x(Logo)({
      size: 24,
      mr: 2,
      onClick: e => props.update(inc)
    }),
    x(NavLink)({
      mr: 2,
      href: 'https://github.com/jxnblk/axs',
      children: 'GitHub'
    }),
    // x(NavLink)({
    //   mr: 2,
    //   href: 'https://npmjs.com/package/axs',
    //   children: 'npm'
    // }),
    x(NavLink)({
      ml: 'auto',
      href: 'http://jxnblk.com',
      children: 'Made by Jxnblk'
    }),
  ]),
]))

module.exports = Footer
