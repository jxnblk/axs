const x = require('reaxe')
const { createProvider } = require('funcup')
const Style = require('./Style')
const Wrap = require('./Wrap')
const Container = require('./Container')
const Nav = require('./Nav')
const Header = require('./Header')
const Features = require('./Features')
const Examples = require('./Examples')
const Footer = require('./Footer')
const colors = require('./colors')

const { div, h1 } = x

const initialState = {
  count: 4,
  color: colors[4]
}

const App = createProvider(initialState)(props => (
  x(Wrap)([
    x(Style)(),
    x(Nav)(),
    x(Header)(),
    x(Container)([
      x(Features)(),
      x(Examples)(),
      x(Footer)()
    ])
  ])
))

module.exports = App
