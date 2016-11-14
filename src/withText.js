
import React from 'react'
import parseTextProps from './util/parse-text-props'

const withText = Comp => {
  const TextComponent = (originalProps, context) => {
    const { props, className } = parseTextProps(context.axs)(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  TextComponent.contextTypes = {
    axs: React.PropTypes.object
  }

  return TextComponent
}

export default withText

