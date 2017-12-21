import React from 'react'
import Base from '../src'
import { fontSize, fontWeight, space, color } from 'styled-system'
import { withTheme } from 'theming'
import system from './system'

const Text = withTheme(props =>
  <Base {...props}
    css={system(
      fontSize,
      fontWeight,
      space,
      color
    )(props) + props.css}
  />
)

export default Text
