const x = require('reaxe')
const { connect } = require('funcup')
const {
  Flex,
  Box,
  Heading,
  Text,
  // Button,
} = require('../src')
const Logo = require('./Logo')
const Pre = require('./Pre')
const Hide = require('./Hide')
const Button = require('./Button')
const { inc } = require('./updaters')

const Hero = connect()(props => (
  x(Flex)({
    w: 1,
    p: [ 1, 3 ],
    css: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: '80vh',
      color: '#fff',
      backgroundColor: props.color[5],
    }
  }, [
    x(Box)({
      f: [ 128, 160, 256, 320 ]
    }, [
      x(Logo)({ size: '1em', color: props.color[8] })
    ]),
    x(Flex.wrap)({
      py: 3,
      css: {
        alignItems: 'center'
      }
    }, [
      x(Heading)({ f: [ 1, 0 ], w: [ 1, 'auto' ], px: 2 }, 'Axs'),
      x(Hide)({
        mobile: true,
        mx: 2,
        css: {
          height: 96,
          borderRightWidth: 4,
          borderRightStyle: 'solid',
        }
      }),
      x(Text)({
        f: 3,
        bold: true,
        w: [ 'auto', 320 ],
        px: 2,
      }, 'Responsive Typography & Layout for React'),
    ]),
    x(Flex.center)([
      x(Button)({
        is: 'a',
        mr: 3,
        href: 'https://github.com/jxnblk/axs',
        children: 'GitHub',
        css: {
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: props.color[9],
          borderRadius: 6,
        }
      }),
      x(Pre)('npm i axs'),
    ])
  ])
))

module.exports = Hero
