
import React from 'react'
import parseBoxProps from './util/parse-box-props'

const withBox = Comp => {
  const BoxComponent = originalProps => {
    const { props, className } = parseBoxProps(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  return BoxComponent
}

export default withBox

