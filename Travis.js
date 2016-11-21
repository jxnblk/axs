
import React from 'react'
import { Box } from '../src'

export default props => (
  <Box
    {...props}
    is='a'
    display='inline-block'
    my2
    mr2
    href='https://travis-ci.org/jxnblk/axs'>
    <Box is='img'
      display='block'
      src='https://travis-ci.org/jxnblk/axs.svg?branch=master' />
  </Box>
)

