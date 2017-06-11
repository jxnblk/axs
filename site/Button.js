const x = require('reaxe')
const { connect } = require('funcup')
const { Button } = require('../src')

const Btn = props => x(Button)({
  ...props,
  css: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '.2em',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    color: '#fff',
    backgroundColor: props.color || '#000',
    borderRadius: 6,
    cursor: 'pointer',
    ':hover': {
      // boxShadow: `inset 0 0 0 32px rgba(0, 0, 0, ${1/4})`
    },
    ...props.css
  }
})

module.exports = Btn
