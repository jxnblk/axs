
const breakpoints = [
  40,
  52,
  64
].map(n => `@media screen and (min-width:${n}em)`)

const space = [
  0, 8, 16, 32, 64
]

const typeScale = [
  64, 48, 32, 24, 16, 14, 12
]

const radius = 4

module.exports = {
  breakpoints,
  space,
  typeScale,
  radius
}
