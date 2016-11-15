
import React from 'react'
import parseBoxProps from './util/parse-box-props'

const withBox = Comp => {
  const Box = (originalProps, context) => {
    // Pass all configuration here
    const { props, className } = parseBoxProps(context.axs)(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  Box.contextTypes = {
    axs: React.PropTypes.object
  }

  Box.displayName = Comp.displayName

  return Box
}

export default withBox

