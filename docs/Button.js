import React from 'react'
import Base from '../src'
import { withTheme } from 'theming'

const Button = withTheme(({ theme, ...props }) =>
  <Base.a
    {...props}
    css={`
      display: inline-block;
      text-decoration: none;
      font-weight: bold;
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 12px;
      padding-bottom: 12px;
      border-radius: 8px;
      color: #fff;
      background-color: #000;
      transition-property: background-color;
      transition-duration: .2s;
      transition-timing-function: ease-out;
      &:hover {
        background-color: ${theme.colors.blue};
      }
    `}
  />
)

export default Button
