
export const TYPE_REG = /^(center|left|right|justify|bold|caps)$/

export const getTypeStyles = config => (key, val) => {
  switch (key) {
    case 'center':
      return { textAlign: 'center' }
    case 'left':
      return { textAlign: 'left' }
    case 'right':
      return { textAlign: 'right' }
    case 'justify':
      return { textAlign: 'justify' }
    case 'bold':
      return { fontWeight: val ? config.bold : 'normal' }
    case 'regular':
      return { fontWeight: 'normal' }
    case 'caps':
      return {
        textTransform: 'uppercase',
        letterSpacing: '.2em'
      }
    default:
      return null
  }
}

