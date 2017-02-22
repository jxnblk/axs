
import cxsAtomic from 'cxs/atomic'
import cxsLite from 'cxs/lite'
import cxsMonolithic from 'cxs/monolithic'
import { createUnderstyle, filterProps } from 'understyle'
import classnames from 'classnames'
import merge from 'deepmerge'
import config from './config'

const AXS_PROPS = /^(css|_css)$/

const parseProps = (original = {}) => {
  const options = config.get()
  const _style = createUnderstyle(options)
  const filter = filterProps(options)

  const props = {}

  Object.keys(original)
    .forEach(key => {
      if (!filter(key) || AXS_PROPS.test(key)) return
      const value = original[key]
      props[key] = value
    })

  const propStyles = _style(original)

  const styles = merge.all([
    { margin: 0 },
    (original._css || {}),
    propStyles,
    (original.css || {}),
  ])

  let cxsClassName
  switch (options.mode) {
    case 'lite':
      cxsClassName = cxsLite(styles)
      break;
    case 'monolithic':
      cxsClassName = cxsMonolithic(styles)
      break;
    default:
      cxsClassName = cxsAtomic(styles)
  }

  const className = classnames(original.className, cxsClassName)

  return { props, className }
}

export default parseProps

