const x = require('reaxe')
const { connect } = require('funcup')
const { div } = x
const {
  Flex,
  Box,
  Text,
  Heading,
  Pre
} = require('../src')
const Button = require('./Button')
const { inc } = require('./updaters')

module.exports = connect()(props => (
  x(Box)({
    py: 4,
    css: {
      color: '#fff',
      backgroundColor: props.color[5] || '#000',
      transitionProperty: 'background-color',
      transitionDuration: '.3s',
      transitionTimingFunction: 'ease-out'
    },
    onClick: e => props.update(inc)
  }, ...[
    x(Flex.center)({
      py: 4,
      css: {
        flexWrap: 'wrap'
      }
    }, ...[
      x(Heading)({
        is: 'h1',
        f: [ 1, null, 0 ],
        ml: [ null, null, 'auto' ],
        w: [ 1, 'auto' ],
        px: 3
      }, 'Axs'),
      x(Box)({
        css: {
          width: 4,
          height: 96,
          backgroundColor: '#fff',
          '@media screen and (max-width: 40em)': {
            display: 'none'
          }
        }
      }),
      x(Box)({
        w: [ 1, 384 ],
        mr: 'auto',
        px: 3
      }, ...[
        x(Text)({ bold: true, f: 3, mb: 2 }, 'Responsive typography and layout toolkit for React'),
        x(Flex.center)([
          x(Button)({
            mr: 2,
            is: 'a',
            href: 'https://github.com/jxnblk/axs'
          }, 'GitHub'),
          x(Pre)('npm i axs')
        ])
      ])
    ])
  ])
))
