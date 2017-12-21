import React from 'react'
import Base from '../src'
import { width, space, color } from 'styled-system'
import { withTheme } from 'theming'
import system from './system'

const Box = withTheme(props =>
  <Base {...props}
    css={system(
      width,
      space,
      color
    )(props) + props.css}
  />
)

export default Box
