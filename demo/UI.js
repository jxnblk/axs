
import React from 'react'
import { Box, config } from 'axs-ui'

import Container from './Container'
import UiHeader from './UiHeader'
import UiNav from './UiNav'
import UiComponents from './UiComponents'
import Footer from './Footer'

const UI = () => {
  return (
    <Box ml={[ null, null, 192 ]}>
      <Container>
        <UiHeader />
        <UiNav py1
          px={[ null, null, 2 ]}
          css={cx.nav} />
        <UiComponents />
      </Container>
      <Footer />
    </Box>
  )
}

const { breakpoints } = config.get()

const cx = {
  root: {
  },
  nav: {
    [breakpoints[1]]: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      marginTop: 100,
      overflow: 'auto',
      width: 192,
      padding: 32,
    }
  },
  main: {
  }
}

export default UI

