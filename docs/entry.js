
import React from 'react'
import ReactDOM from 'react-dom'
import { cxs, config } from '../src'
import App from './App'

cxs('*', {
  boxSizing: 'border-box'
})

cxs('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  lineHeight: 1.5,
  margin: 0
})

config.set({
  typeScale: [
    72,
    64,
    32,
    24,
    16,
    14,
    12,
  ],
  bold: 600
})

ReactDOM.render(<App />, app)

