
import React from 'react'
import parseTextProps from './util/parse-text-props'

const withText = Comp => {
  const Text = (originalProps) => {
    const { props, className } = parseTextProps(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  Text.displayName = Comp.displayName

  return Text
}

export default withText

