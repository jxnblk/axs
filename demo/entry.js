
const React = require('react')
const ReactDOM = require('react-dom')
const { cxs, config } = require('../src')
const html = require('./html')
const App = require('./App').default

const basehref = process.env.NODE_ENV === 'production' ? '/axs/' : '/'

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

if (typeof document !== 'undefined') {
  const path = window.location.pathname
  ReactDOM.render(<App path={path} />, app)
}

module.exports = (locals) => {
  if (typeof document !== 'undefined') {
    return
  }
  const { renderToString, renderToStaticMarkup } = require('react-dom/server')

  const app = renderToStaticMarkup(<App {...locals} />)
  const css = cxs.css
  cxs.reset()

  return html({ app, css, basehref })
}

