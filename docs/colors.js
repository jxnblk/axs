const palx = require('palx')

const palette = palx('#07c')

const colors = Object.keys(palette)
  .filter(key => key !== 'gray')
  .map(key => palette[key])
  .filter(Array.isArray)

module.exports = colors
