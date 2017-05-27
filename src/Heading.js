const styled = require('styled-components').default
const Box = require('./Box')
const axs = require('./axs')
const sx = require('./sx')

const Base = styled('h2')(['margin:0;'], sx)
const Heading = axs(Base)
Heading.withComponent = Base.withComponent

const xHeading = styled(Box)([])


Heading.h1 = Heading.withComponent('h1')
Heading.h2 = Heading
Heading.h3 = Heading.withComponent('h3')
Heading.h4 = Heading.withComponent('h4')

module.exports = Heading
