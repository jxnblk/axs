
export const RADIUS_REG = /^rounded$/

const sh = (...args) => args
  .map(n => n === 0 ? 0 : n + 'px')
  .join(' ')

export const getRadii = (R = 2) => val => {
  switch (val) {
    case true:
      return { borderRadius: R }
    case false:
      return { borderRadius: 0 }
    case 'top':
      return {
        borderRadius: sh(R, R, 0, 0)
      }
    case 'right':
      return {
        borderRadius: sh(0, R, R, 0)
      }
    case 'bottom':
      return {
        borderRadius: sh(0, 0, R, R)
      }
    case 'left':
      return {
        borderRadius: sh(R, 0, 0, R)
      }
    default:
      return null
  }
}

