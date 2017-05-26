const styled = require('styled-components').default
const Box = require('./Box')

// const Text = styled(Box).attrs({ is: 'p' })([]) //.withComponent('p')
// const _Text = styled(Box)`color:tomato;` //.withComponent('p')
// const Text = _Text.withComponent('p')
const Text = Box // .withComponent('p'
Text.span = Text.withComponent('span')
Text.div = Text.withComponent('div')

module.exports = Text
