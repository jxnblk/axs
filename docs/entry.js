const h = require('react').createElement
const { render } = require('react-dom')
const App = require('./App')

if (typeof app === 'undefined') {
  window.app = document.createElement('div')
  document.body.appendChild(app)
}

render(h(App), app)
