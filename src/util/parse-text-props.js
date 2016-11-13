
import cxs from 'cxs'
import classnames from 'classnames'
import defaultConfig from './default-config'
import {
  MARGIN_REG,
  parseMargin,
} from './scale-prop'
import {
  F_REG,
  SF_REG,
  MF_REG,
  LF_REG,
  getFontSize
} from './font-size'
import {
  TYPE_REG,
  getTypeStyles
} from './typography'
import {
  COLOR_REG,
  BG_REG,
  getColor,
  getBgColor,
} from './color'

// Pass context config
const parseTextProps = config => original => {
  const breakpoints = {
    ...defaultConfig.breakpoints,
    ...config.breakpoints
  }
  const styles = [
    { margin: 0 }
  ]

  const props = Object.keys(original)
    .map(key => {
      const val = original[key]

      if (F_REG.test(key)) {
        styles.push(getFontSize(config)(key, val))
      } else if (SF_REG.test(key)) {
        styles.push(getFontSize(config)(breakpoints[0])(key, val))
      } else if (MF_REG.test(key)) {
        styles.push(getFontSize(config)(breakpoints[1])(key, val))
      } else if (LF_REG.test(key)) {
        styles.push(getFontSize(config)(breakpoints[2])(key, val))
      } else if (val) {
        // Handle truthy values
        // - bold, center, caps
        if (TYPE_REG.test(key)) {
          styles.push(getTypeStyles(key, val))
        } else if (MARGIN_REG.test(key)) {
          styles.push(parseMargin(key, val))
        } else if (COLOR_REG.test(key)) {
          styles.push(getColor(config)(key, val))
        } else if (BG_REG.test(key)) {
          styles.push(getBgColor(config)(key, val))
        } else if (key === 'css') {
          styles.push(val)
        } else {
          return key
        }
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

export default parseTextProps

