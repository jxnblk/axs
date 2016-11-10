
import React from 'react'
import parseProps from './parse-props'

const withBocxs = Comp => {
  const BocxsComponent = originalProps => {
    const { props, className } = parseProps(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  return BocxsComponent
}

export default withBocxs

