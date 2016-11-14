
import React from 'react'
import parseTextProps from './util/parse-text-props'

const withText = Comp => {
  const Text = (originalProps, context) => {
    const { props, className } = parseTextProps(context.axs)(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  Text.contextTypes = {
    axs: React.PropTypes.object
  }

  return Text
}

export default withText

