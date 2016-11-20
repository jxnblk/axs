
import React from 'react'
import { Box, colors } from 'axs'
import resets from './resets'

class Select extends React.Component {
  render () {
    const { css, ...props } = this.props

    return (
      <Box
        is='select'
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
  ...resets.select,
  ':focus': {
    outline: 'none',
    borderColor: colors.blue
  }
}

export default Select

