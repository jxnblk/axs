
export const RADIUS_REG = /^rounded$/

const sh = (...args) => args
  .map(n => n === 0 ? 0 : n + 'px')
  .join(' ')

const isNum = n => typeof n === 'number' && !isNaN(n)

export const getRadii = (R = 2) => val => {
  if (isNum(val)) {
    return { borderRadius: val }
  }

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
    case 'circle':
      return {
        borderRadius: 99999
      }
    default:
      return null
  }
}

