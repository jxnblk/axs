const x = require('reaxe')
const { connect } = require('funcup')
const { Button } = require('axs')

module.exports = props => x(Button)({
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
    color: '#000',
    backgroundColor: '#fff',
    mixBlendMode: 'screen',
    ':hover': {
    }
  }
})
