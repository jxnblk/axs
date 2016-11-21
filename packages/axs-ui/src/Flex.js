
import React from 'react'
import classnames from 'classnames'
import { Box, cxs, config } from 'axs'
import { parseArrayValue } from 'axs/util'

const parseArr = parseArrayValue(config.breakpoints)

const createStyle = (prop) => (value) => {
  if (Array.isArray(value)) {
    return parseArr(value)(createStyle(prop))
  }

  return { [prop]: value }
}

const createBooleanStyle = (prop, value, falsy = null) => (bool) => {
  if (Array.isArray(bool)) {
    const val = bool.map(b => b ? value : falsy)
    return parseArr(val)(createStyle(prop))
  }

  return { [prop]: (bool ? value : falsy) }
}

const parseProps = (original) => {
  const styles = []
  const props = Object.keys(original)
    .map(key => {
      const val = original[key]

      if (key === 'wrap') {
        styles.push(createBooleanStyle('flexWrap', 'wrap', 'nowrap')(val))
      } else if (key === 'direction') {
        styles.push(createStyle('flexDirection')(val))
      } else if (key === 'align') {
        styles.push(createStyle('alignItems')(val))
      } else if (key === 'justifyContent') {
        styles.push(createStyle('justifyContent')(val))
      } else {
        return key
      }
    }).reduce((a, key) => {
      if (key) {
        a[key] = original[key]
      }
      return a
    }, {})

  const className = classnames(
    original.className,
    cxs(Object.assign({}, ...styles))
  )

  return { props, className }
}

const Flex = originalProps => {
  const { props, className } = parseProps(originalProps)

  return (
    <Box
      {...props}
      className={className}
      display='flex'
    />
  )
}

Flex.displayName = 'Flex'

export default Flex

