const x = require('reaxe')
const { connect } = require('funcup')
const {
  Flex,
  Box,
  Heading,
  Text,
} = require('../src')
const Button = require('./Button')
const { setIndex } = require('./updaters')

const CTA = connect()(props => (
  x(Box)({ px: 3, py: 4 }, [
    x(Heading)({ f: 2 }, 'Get Started'),
    x(Text)({
      // bold: true,
      f: 3
    }, 'Check out demos or read the documentation on GitHub'),
    x(Flex.wrap)({ w: 1, py: 3 }, [
      x(Button)({
        w: [ 1, 'auto' ],
        mr: 3,
        onClick: e => {
          window.scrollTo(0, 0)
          props.update(setIndex(1))
        },
        color: props.color[5],
        children: 'View Demos'
      }),
      x(Button)({
        w: [ 1, 'auto' ],
        is: 'a',
        href: 'https://github.com/jxnblk/axs',
        color: props.color[5],
        children: 'GitHub'
      })
    ])
  ])
))

module.exports = CTA
