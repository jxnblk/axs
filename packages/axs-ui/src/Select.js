
import React from 'react'
import { Box, config } from 'axs'
import { Chevron } from 'reline'
import resets from './resets'

class Select extends React.Component {
  render () {
    return (
      <Box _css={cx.root}>
        <Box
          is='select'
          _css={cx.select}
          width={1}
          rounded
          border
          borderGray3
          {...this.props}
        />
        <Box is={SmallChevron}
          _css={cx.chevron} />
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

Select.displayName = 'Select'

export default Select

