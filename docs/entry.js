
import React from 'react'
import ReactDOM from 'react-dom'
import { cxs } from '../src'
import App from './App'

cxs('*', {
  boxSizing: 'border-box'
})

cxs('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  lineHeight: 1.5,
  margin: 0
})

ReactDOM.render(<App />, app)

