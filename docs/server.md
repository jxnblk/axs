
## Server Side Rendering

When rendering client-side, cxs will automatically insert a style tag into the head.
For server-side rendering, get the CSS string from cxs after render.

```js
const React = require('react')
const { renderToString } = require('react-dom/server')
const { cxs } = require('axs')
const App = require('./App')

module.exports = (req, res) => {
  const html = renderToString(React.createElement(App))
  const css = cxs.css()

  // Reset the cache for other page renders
  cxs.reset()

  return `<!DOCTYPE html>
  <style>${css}</style>
  ${html}`
}
```

