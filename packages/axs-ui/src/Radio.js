
import React from 'react'
import { Box, config } from 'axs'

class Radio extends React.Component {
  render () {
    const {
      css,
      id,
      name,
      checked,
      value,
      defaultValue,
      onClick,
      onChange,
      onFocus,
      onBlur,
      ...props
    } = this.props

    const inputProps = {
      id,
      name,
      checked,
      value,
      defaultValue,
      onClick,
      onChange,
      onFocus,
      onBlur,
    }

    return (
      <Box
        display='inline-block'
        {...props}
        css={{...cx.root, ...css}}>
        <Box
          is='input'
          type='radio'
          {...inputProps}
          css={cx.input}
        />
        <Box
          css={{
            ...cx.dot,
            backgroundColor: checked ? config.colors.white : 'currentcolor',
            borderStyle: checked ? 'solid' : null,
            borderColor: checked ? 'currentcolor' : null,
            opacity: checked ? null : 1/4
          }} />
      </Box>
    )
  }
}

const cx = {
  root: {
    position: 'relative',
    width: 16,
    height: 16,
    verticalAlign: 'middle',
    alignSelf: 'center'
  },
  input: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0,
    ':focus ~ div': {
      boxShadow: `0 0 0 2px ${config.colors.blue}`
    }
  },
  dot: {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    borderWidth: 5,
    borderRadius: 99999,
    transition: 'border .1s ease-out',
    color: 'inherit'
  }
}

export default Radio

