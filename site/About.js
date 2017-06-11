const x = require('reaxe')
const {
  Flex,
  Box,
  Text,
} = require('../src')
const Container = require('./Container')

module.exports = props => x(Flex.center)({
  px: 3,
  py: 4,
}, [
  x(Box)({
    css: {
      maxWidth: 768
    }
  }, [
    x(Text)({ f: 3, bold: true }, bs3)
  ])
])

const bs3 = `Axs is a React UI component library that serves as a foundation for highly customized UI as well as a utility belt for prototyping.`

const bs2 = `
Axs is an abstraction of the most common responsive layout and typographic styling concerns in the form of UI component primitives.

Axs is intended to serve as a foundation for creating your own custom UI library
and as a way to quickly prototype new UI.

Use Axs out-of-the-box or as the basis of a highly-customized,
application-specific UI component library.
`

const bullshit = `Axs is a declarative styling API for creating
responsive, fully fluid user interfaces with React.
Using <a>Glamor</a>
to dynamically create CSS based directly on a given design,
Axs helps reduce the typical technical debt incurred from
using traditional CSS approaches, without the need for
specialized expertise in front end architecture.`
