
import React from 'react'
import { Box, config } from 'axs'
import resets from './resets'

class Input extends React.Component {
  render () {
    const { css, ...props } = this.props

    return (
      <Box
        is='input'
        css={{
          ...cx,
          ...css
        }}
        rounded
        border
        borderGray3
        width={1}
        {...props}
      />
    )
  }
}

const cx = {
  ...resets.input,
  ':focus': {
    outline: 'none',
    // borderColor: config.colors.blue
  }
}

export default Input

