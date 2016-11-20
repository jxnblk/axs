
import React from 'react'
import parseProps from './util/parse-props'

const withAxs = Comp => {
  const AxsComponent = (originalProps) => {
    const { props, className } = parseProps(originalProps)

    return (
      <Comp
        {...props}
        className={className}
      />
    )
  }

  AxsComponent.displayName = Comp.displayName

  return AxsComponent
}

export default withAxs

