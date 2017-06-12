const axs = require('./axs')

const style = {
  display: 'inline-flex',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  textAlign: 'center',
  lineHeight: 1.25,
  margin: 0,
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 24,
  paddingRight: 24,
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 0,
  textDecoration: 'none',
  appearance: 'none'
}

const Button = axs(style)('button')

module.exports = Button
