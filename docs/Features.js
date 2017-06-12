const x = require('reaxe')
const {
  Flex,
  Box,
  Heading,
  Text
} = require('../src')
const Bar = require('./Bar')

const Features = props => x.section([
  x(Flex.wrap)({ my: 4 }, ...features.map(feature => (
    x(Box)({ px: 3, py: 3,  w: [ 1, 1/2 ] }, ...[
      x(Bar)(),
      x(Heading)({ is: 'h3', mb: 1 }, feature.heading),
      x(Text)(feature.text)
    ])
  )))
])

module.exports = Features

const features = [
  {
    heading: 'Responsive Typography and Layout',
    text: 'Axs is an abstraction of the most common responsive typographic and layout styling concerns in the form of UI component primitives.',
  },
  {
    heading: 'From Prototype to UI Library',
    text: 'Axs is intended as a way to quickly prototype new UI, handle one-off styles, and serve as a foundation for creating your own custom UI component libraries.',
  },
  {
    heading: 'UI Component Primitives',
    text: 'Use the Flex and Box components as a starting point for any visual containers or grid systems in your app. Use the Heading and Text components for headings, labels, messages, or any other UI typography. Use the Color and Border components for thematic styles.',
  },
  {
    heading: 'The Power of CSS in JavaScript',
    text: 'Using Glamor under the hood, each Axs component handles CSS-in-JS with the css prop, with support for media queries and pseudoclasses, to allow for any fine-tuned styling needs.',
  }
]
