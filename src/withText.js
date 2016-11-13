
import React from 'react'
import parseTextProps from './util/parse-text-props'

const withText = Comp => {
  const TextComponent = originalProps => {
    const { props, className } = parseTextProps(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  return TextComponent
}

export default withText

