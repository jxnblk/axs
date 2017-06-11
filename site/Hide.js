const x = require('reaxe')
const { Box, config } = require('../src')

const Hide = ({
  mobile,
  desktop,
  ...props
}) => {
  const css = {
    ...props.css,
    '@media screen and (max-width:40em)': {
      display: mobile ? 'none' : null
    },
    '@media screen and (min-width:40em)': {
      display: desktop ? 'none' : null
    },
  }
  return x(Box)({ ...props, css })
}

module.exports = Hide
