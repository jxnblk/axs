
import React from 'react'
import { Box, config } from 'axs-ui'

import Container from './Container'
import UiHeader from './UiHeader'
import UiNav from './UiNav'
import UiComponents from './UiComponents'

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
      top: 100,
      left: 0,
      bottom: 0,
      overflow: 'auto',
      width: 192,
      paddingLeft: 32,
      paddingRight: 32,
      backgroundColor: '#fff'
    }
  },
  main: {
  }
}

export default UI

