import React from 'react'
import { ThemeProvider } from 'theming'
import Base, { Style } from '../src'
import theme from './theme'

import Box from './Box'
import Logo from './Logo'
import Heading from './Heading'
import Text from './Text'
import Pre from './Pre'
import Button from './Button'
import Link from './Link'

const App = props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Style css={basecss} />
      <Box px={[ 4, 5 ]} py={3}>
        <Logo size={256} />
        <Heading>
          Axs
        </Heading>
        <Text fontWeight={700} mb={4}>
          Stupid simple style components for React
        </Text>
        <Pre mb={4}>npm i axs</Pre>
        <Button
          href='https://github.com/jxnblk/axs'
          children='GitHub'
        />
      </Box>
      <Box px={[ 4, 5 ]} py={3}>
        <Pre children={example} />
      </Box>
      <Box is='footer' px={[ 4, 5 ]} py={3}>
        <Link href='http://jxnblk.com'>
          Made by Jxnblk
        </Link>
      </Box>
    </React.Fragment>
  </ThemeProvider>
)

const basecss = `
* { box-sizing: border-box }
body {
  font-family: -apple-system, system-ui, sans-serif;
  line-height: 1.5;
  margin: 0;
}
`

const example = `const Heading = props =>
  <Base.h2 {...props} css='color:tomato;' />`

export default App
