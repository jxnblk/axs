
import React from 'react'
import { Box, colors } from 'axs'
import { X } from 'reline'

class Checkbox extends React.Component {
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
        blue
        {...props}
        css={{...cx.root, ...css}}>
        <Box
          is='input'
          type='checkbox'
          {...inputProps}
          css={cx.input}
        />
        <Box
          rounded
          css={{
            ...cx.box,
            backgroundColor: checked ? 'currentcolor' : colors.gray5,
            // borderStyle: checked ? 'solid' : null,
            // borderColor: checked ? 'currentcolor' : null,
            opacity: checked ? null : 1/4
          }}>
          {checked && (
            <Box is={X}
              css={cx.check}
            />
          )}
        </Box>
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
  },
  box: {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    color: 'currentcolor',
    // borderWidth: 2,
    transition: 'border .1s ease-out'
  },
  check: {
    display: 'block',
    width: 12,
    height: 12,
    color: colors.white
  }
}

export default Checkbox

