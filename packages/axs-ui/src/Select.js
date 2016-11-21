
import React from 'react'
import { Box, config } from 'axs'
import { Chevron } from 'reline'
import resets from './resets'

class Select extends React.Component {
  render () {
    const { css, ...props } = this.props

    return (
      <Box css={{ ...cx.root, ...css }}>
        <Box
          is='select'
          css={cx.select}
          width={1}
          rounded
          border
          borderGray3
          {...props}
        />
        <Box is={SmallChevron}
          css={cx.chevron} />
      </Box>
    )
  }
}

const SmallChevron = props => <Chevron {...props} down size={12} />

const cx = {
  root: {
    position: 'relative'
  },
  select: {
    ...resets.select,
    paddingRight: 24,
    ':focus': {
      outline: 'none',
      borderColor: config.colors.blue
    }
  },
  chevron: {
    position: 'absolute',
    top: '50%',
    right: 0,
    marginRight: 8,
    transform: 'translateY(-50%)'
  }
}

export default Select

