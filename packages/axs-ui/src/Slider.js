
import React from 'react'
import { Box, config } from 'axs'

class Slider extends React.Component {
  render () {
    return (
      <Box
        is='input'
        type='range'
        _css={cx}
        display='block'
        width={1}
        m0
        bgGray3
        {...this.props}
      />
    )
  }
}

const thumbStyles = {
  width: 24,
  height: 24,
  backgroundColor: config.colors.black,
  border: 0,
  borderRadius: 99999,
  WebkitAppearance: 'none'
}

const cx = {
  boxSizing: 'border-box',
  height: 6,
  marginTop: 6,
  marginBottom: 6,
  cursor: 'pointer',
  color: 'inherit',
  borderRadius: 99999,
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  '::-webkit-slider-thumb': {
    ...thumbStyles
  },
  '::-moz-range-thumb': {
    ...thumbStyles
  },
  ':focus': {
    outline: 'none',
    '::-webkit-slider-thumb': {
      backgroundColor: 'currentcolor'
    },
    '::-moz-range-thumb': {
      backgroundColor: 'currentcolor'
    }
  }
}

Slider.displayName = 'Slider'

export default Slider

