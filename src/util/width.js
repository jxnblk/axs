
export const WREG = /^width$/
export const SWREG = /^sm$/
export const MWREG = /^md$/
export const LWREG = /^lg$/

const w = n => (n * 100) + '%'

const parseArray = breakpoints => values => {
  const bp = [ null, ...breakpoints ]
  const styles = values.map((val, i) => {
    const breakpoint = bp[i]
    const width = w(val)
    if (!breakpoint) {
      return { width }
    }
    return {
      [breakpoint]: { width }
    }
  })

  return Object.assign({}, ...styles)
}

export const getWidth = (breakpoints, i) => val => {
  if (Array.isArray(val)) {
    const widths = parseArray(breakpoints)(val)
    return widths
  }

  const breakpoint = breakpoints[i]
  const width = w(val)

  if (!breakpoint) {
    return { width }
  }

  return {
    [breakpoint]: { width }
  }
}

