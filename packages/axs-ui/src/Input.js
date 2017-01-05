
import React from 'react'
import { Box, config } from 'axs'
import resets from './resets'

class Input extends React.Component {
  render () {
    return (
      <Box
        is='input'
        _css={cx}
        rounded
        border
        borderGray3
        width={1}
        {...this.props}
      />
    )
  }
}

const cx = {
  ...resets.input,
  ':focus': {
    outline: 'none',
    borderColor: config.colors.blue
  }
}

export default Input

