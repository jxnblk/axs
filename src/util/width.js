
import breakpoints from './breakpoints'

export const WREG = /^w$/
export const SWREG = /^sw$/
export const MWREG = /^mw$/
export const LWREG = /^lw$/

export const getWidth = breakpoint => val => {
  const width = (val * 100) + '%'
  if (!breakpoint) {
    return { width }
  }

  return {
    [breakpoint]: {
      width
    }
  }
}

