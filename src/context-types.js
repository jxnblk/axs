const { shape, array, number } = require('prop-types')

module.exports = {
  theme: shape({
    space: array,
    fontSizes: array,
    breakpoints: array,
    radius: number
  })
}
