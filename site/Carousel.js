const { Children } = require('react')
const x = require('reaxe')
const { Box, Flex } = require('../src')
const Controls = require('./Controls')
const Hide = require('./Hide')

module.exports = ({ index, children }) => {
  const slides = Children.map(children, (child, i) => {
    return x(Box)({
      w: '100vw',
      px: [ 2, 3 ],
      css: {
        minHeight: '80vh',
      }
    }, child)
  })

  const i = index % children.length

  return (
    x(Box)({
      w: 1,
      css: {
        position: 'relative',
        overflowX: 'hidden',
      }
    }, [
      x(Flex)({
        width: (children.length * 100) + 'vw',
        css: {
          minHeight: '80vh',
          transitionProperty: 'transform',
          transitionDuration: '.3s',
          transitionTimingFunction: 'ease-out',
          transform: `translateX(${(i / children.length) * -100}%)`
        }
      }, slides),
      x(Hide)({ mobile: true }, [
        x(Controls)()
      ])
    ])
  )
}
