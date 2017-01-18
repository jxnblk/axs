
import React from 'react'
import { Box, config } from 'axs'

const Progress = (props) => (
  <Box
    is='progress'
    display='block'
    width={1}
    blue
    border={false}
    _css={cx}
    {...props}
  />
)

const cx = {
  height: 8,
  overflow: 'hidden',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  borderRadius: 99999,
  '::-webkit-progress-bar': {
    backgroundColor: config.colors.gray3
  },
  '::-webkit-progress-value': {
    backgroundColor: 'currentcolor'
  },
  '::-moz-progress-bar': {
    backgroundColor: 'currentcolor'
  },
}

Progress.displayName = 'Progress'

export default Progress

