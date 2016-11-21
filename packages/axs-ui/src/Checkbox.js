
import React from 'react'
import { Box, config } from 'axs'
import { Line, X } from 'reline'

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
            backgroundColor: checked ? 'currentcolor' : config.colors.gray3
          }}>
          {checked && check}
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
    ':focus ~ div': {
      boxShadow: `0 0 0 2px ${config.colors.blue}`
    }
  },
  box: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    width: 16,
    height: 16,
    color: 'currentcolor',
    transition: 'background-color .1s ease-out'
  },
  check: {
    margin: 2,
    display: 'block',
    color: config.colors.white
  }
}

const check = <Line
  size={12}
  style={cx.check}
  path={[
    [2, 7],
    [8, 12],
    [16, 3]
  ]}
/>

export default Checkbox

