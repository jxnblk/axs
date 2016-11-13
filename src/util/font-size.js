
import breakpoints from './breakpoints'

// Move to config module
const typeScale = [
  64,
  48,
  32,
  24,
  16,
  14,
  12
]

// size={2} size1 sm1 md0 sm={1} md={0}

export const F_REG = /^(size|size\d)$/
export const SF_REG = /^(sm|sm\d)$/
export const MF_REG = /^(md|md\d)$/
export const LF_REG = /^(lg|lg\d)$/

const isNumKey = key => /\d$/.test(key)

const getNumberFromKey = key => parseInt(key.replace(/[a-z]/g, ''))

export const getFontSize = breakpoint => (key, val) => {
  const i = isNumKey(key)
    ? getNumberFromKey(key)
    : val
  const fontSize = typeScale[i]

  if (!fontSize) {
    return null
  }

  if (!breakpoint) {
    return { fontSize }
  }

  return {
    [breakpoint]: {
      fontSize
    }
  }
}

