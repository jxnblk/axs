
// Generic style resets

const fieldReset = {
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  margin: 0,
  padding: 8,
  color: 'inherit',
  backgroundColor: 'transparent',
  border: '1px solid',
  boxShadow: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
}

const resets = {
  input: {
    ...fieldReset
  },
  select: {
    ...fieldReset
  },
  textarea: {
    ...fieldReset
  },
  button: {
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    margin: 0,
    padding: 8,
    color: 'inherit',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    textDecoration: 'none'
  },
}

export default resets

