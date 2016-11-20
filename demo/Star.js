
import React from 'react'
import { Box } from '../src'

export default props => (
  <Box
    is='iframe'
    {...props}
    src={`//ghbtns.com/github-btn.html?user=jxnblk&repo=axs&type=star&count=true`}
    frameBorder='0'
    scrolling='0'
    width='96px'
    height='20px'
    css={cx}
    my2
  />
)

const cx = {
  width: 96,
  height: 20
}

