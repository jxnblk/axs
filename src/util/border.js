
export const BORDER_REG = /^border$/

export const getBorder = val => {
  if (typeof val === 'number') {
    return {
      borderStyle: 'solid',
      borderWidth: val
    }
  }

  switch (val) {
    case true:
      return { border: '1px solid' }
    case false:
      return { border: 0 }
    case 'top':
      return { borderTop: '1px solid' }
    case 'right':
      return { borderRight: '1px solid' }
    case 'bottom':
      return { borderBottom: '1px solid' }
    case 'left':
      return { borderLeft: '1px solid' }
    default:
      return null
  }
}

