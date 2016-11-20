
import React from 'react'
import { Box, colors } from 'axs'
import resets from './resets'

class Textarea extends React.Component {
  render () {
    const { css, ...props } = this.props

    return (
      <Box
        is='textarea'
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
  ...resets.textarea,
  ':focus': {
    outline: 'none',
    borderColor: colors.blue
  }
}

export default Textarea

