
// Replace with configurable function
import defaultConfig from './default-config'

export const F_REG = /^(size|size\d)$/
export const SF_REG = /^(sm|sm\d)$/
export const MF_REG = /^(md|md\d)$/
export const LF_REG = /^(lg|lg\d)$/

const isNumKey = key => /\d$/.test(key)

const getNumberFromKey = key => parseInt(key.replace(/[a-z]/g, ''))

export const getFontSize = ({
  typeScale = defaultConfig.typeScale
} = {}) => breakpoint => (key, val) => {
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

