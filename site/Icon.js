const x = require('reaxe')
const Logo = require('./Logo')
const colors = require('./colors')

module.exports = props => (
  x.div({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 1024,
      height: 512,
      color: '#fff',
      backgroundColor: colors[0][5]
    }
  }, [
    x(Logo)({
      size: 256
    })
  ])
)
