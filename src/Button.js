const axs = require('./axs')

const style = {
  display: 'inline-flex',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  margin: 0,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  borderRadius: 4,
  color: '#fff',
  backgroundColor: '#07c',
  border: 0,
  textDecoration: 'none',
  appearance: 'none'
}

const Button = axs(style)('button')

module.exports = Button
