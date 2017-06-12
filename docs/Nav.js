const x = require('reaxe')
const { connect } = require('funcup')
const { Chevron } = require('reline')
const {
  Flex,
  Box,
  Color,
} = require('../src')
const Logo = require('./Logo')
const NavLink = require('./NavLink')
const Hide = require('./Hide')
const { dec, inc, setIndex, cycleColor } = require('./updaters')
const { nav } = x

const Nav = connect()(props => nav([
  x(Color)({
    color: props.color[5]
  }, ...[
    x(Flex.center)({ px: [ 2, 3 ], py: 2 }, ...[
      x(Logo)({
        mr: 2,
        size: 24,
        onClick: e => props.update(setIndex(0))
      }),
      x(NavLink)({ mr: 2, href: 'https://github.com/jxnblk/axs' }, 'GitHub'),
      // x(NavLink)({
      //   ml: 'auto',
      //   children: 'color',
      //   href: '#',
      //   onClick: e => props.update(cycleColor)
      // }),

      x(Hide)({ ml: 'auto', mobile: true }, [
        x(Flex)([
          x.a({ href: 'https://travis-ci.org/jxnblk/axs' }, [
            x.img({ style: { display: 'block' },
              src: 'https://img.shields.io/travis/jxnblk/axs.svg'
            })
          ]),
          x(Box)({ mr: 1 }),
          x.a({ href: 'https://github.com/jxnblk/axs' }, [
            x.img({ style: { display: 'block' },
              src: 'https://img.shields.io/github/stars/jxnblk/axs.svg?style=social&label=Star'
            })
          ])
        ])
      ]),

      x(Hide)({ ml: 'auto', desktop: true }, [
        x(NavLink)({
          mr: 1,
          href: '#',
          onClick: e => props.update(dec)
        },
          x(Chevron)({ left: true })
        ),
        x(NavLink)({
          mx: 1,
          href: '#',
          onClick: e => props.update(inc)
        },
          x(Chevron)({ right: true })
        ),
      ])
    ])
  ])
]))

module.exports = Nav
