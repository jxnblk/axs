const x = require('reaxe')
const {
  Flex,
  Box,
  Text,
} = require('../src')
const Container = require('./Container')

const About = props => x(Flex.center)({
  px: 3,
  py: 4,
}, [
  x(Box)({
    css: {
      maxWidth: 768
    }
  }, [
    x(Text)({ f: 3, bold: true }, copy)
  ])
])

const copy = `Axs is a React UI component library that serves as a foundation for highly customized UI as well as a utility belt for prototyping.`


module.exports = About
