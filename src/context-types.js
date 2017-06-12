const { shape, array, number } = require('prop-types')
module.exports = {
  axs: shape({
    space: array,
    typeScale: array,
    breakpoints: array,
    radius: number
  })
}
