
import React from 'react'
import { Box, config } from 'axs'
import resets from './resets'

class Textarea extends React.Component {
  render () {
    return (
      <Box
        is='textarea'
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
  ...resets.textarea,
  ':focus': {
    outline: 'none',
    borderColor: config.colors.blue
  }
}

export default Textarea

