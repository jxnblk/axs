
## Server Side Rendering

When rendering client-side, fela will automatically insert a style tag into the head.
For server-side rendering, get the CSS string from fela after render.

```js
const React = require('react')
const { renderToString } = require('react-dom/server')
// To do: make cleaner export
const { cx } = require('axs')
const App = require('./App')

module.exports = (req, res) => {
  const html = renderToString(React.createElement(App))
  const css = cx.getCss()

  return `<!DOCTYPE html>
  <style>${css}</style>
  ${html}`
}
```

