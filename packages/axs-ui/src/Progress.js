
import React from 'react'
import { Box, colors } from 'axs'

const Progress = ({ css, ...props }) => (
  <Box
    is='progress'
    display='block'
    width={1}
    blue
    rounded='circle'
    border={false}
    css={{ ...cx, ...css }}
    {...props}
  />
)

const cx = {
  height: 8,
  overflow: 'hidden',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  '::-webkit-progress-bar': {
    backgroundColor: colors.gray3
  },
  '::-webkit-progress-value': {
    backgroundColor: 'currentcolor'
  },
  '::-moz-progress-bar': {
    backgroundColor: 'currentcolor'
  },
}

export default Progress

