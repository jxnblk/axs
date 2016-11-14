
import React from 'react'
import parseBoxProps from './util/parse-box-props'

const withBox = Comp => {
  const BoxComponent = (originalProps, context) => {
    const { props, className } = parseBoxProps(context.axs)(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  BoxComponent.contextTypes = {
    axs: React.PropTypes.object
  }

  return BoxComponent
}

export default withBox

