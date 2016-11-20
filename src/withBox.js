
import React from 'react'
import parseBoxProps from './util/parse-box-props'

const withBox = Comp => {
  const Box = (originalProps) => {
    const { props, className } = parseBoxProps(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  Box.displayName = Comp.displayName

  return Box
}

export default withBox

