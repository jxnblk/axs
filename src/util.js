
const idx = (p, obj) => p.reduce((a, b) => (a && a[b]) ? a[b] : null, obj)

const px = n => n ? (n + 'px') : n

const radius = n => arg => {
  if (typeof arg === 'number') return arg

  switch (arg) {
    case true:
      return n
    case 'top':
      return [ n, n, 0, 0 ].map(px).join(' ')
    case 'right':
      return [ 0, n, n, 0 ].map(px).join(' ')
    case 'bottom':
      return [ 0, 0, n, n ].map(px).join(' ')
    case 'left':
      return [ n, 0, 0, n ].map(px).join(' ')
    case false:
      return 0
    default:
      return null
  }
}

module.exports = {
  idx,
  radius
}
