
export const breakpoints = [
  '(min-width:40em)',
  '(min-width:52em)',
  '(min-width:64em)'
].map(mw => `@media screen and ${mw}`)

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

