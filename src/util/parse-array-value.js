
const parseArrayValue = breaks => values => createStyle => {
  const breakpoints = [ null, ...breaks ]
  const styles = values.map((value, i) => {
    const breakpoint = breakpoints[i]
    if (value === null) {
      return null
    }

    if (!breakpoint) {
      return createStyle(value)
    }

    return {
      [breakpoint]: createStyle(value)
    }
  })

  return Object.assign({}, ...styles)
}

export default parseArrayValue

