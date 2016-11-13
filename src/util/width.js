
export const WREG = /^width$/
export const SWREG = /^sm$/
export const MWREG = /^md$/
export const LWREG = /^lg$/

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

