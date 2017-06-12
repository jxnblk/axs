const x = require('reaxe')
const { createProvider } = require('funcup')
const Style = require('./Style')
const Nav = require('./Nav')
const Carousel = require('./Carousel')
const Hero = require('./Hero')
const Container = require('./Container')
const About = require('./About')
const Usage = require('./Usage')
const Features = require('./Features')
const CTA = require('./CTA')
const Footer = require('./Footer')
const BoxDemo = require('./BoxDemo')
const TextDemo = require('./TextDemo')
const FlexDemo = require('./FlexDemo')
const HeadingDemo = require('./HeadingDemo')
const ColorDemo = require('./ColorDemo')
const BorderDemo = require('./BorderDemo')
const GridDemo = require('./GridDemo')
const MediaObjectDemo = require('./MediaObjectDemo')
const BarChartDemo = require('./BarChartDemo')
const PercentageDemo = require('./PercentageDemo')
const PanelDemo = require('./PanelDemo')
const CardDemo = require('./CardDemo')
const colors = require('./colors')
const { div, h1 } = x

const App = props => (
  div([
    x(Style)(),
    x(Nav)(),
    x(Carousel)({ index: props.index }, ...[
      x(Hero)(),
      x(BoxDemo)(),
      x(TextDemo)(),
      x(FlexDemo)(),
      x(HeadingDemo)(),
      x(ColorDemo)(),
      x(BorderDemo)(),
      x(GridDemo)(),
      x(MediaObjectDemo)(),
      x(BarChartDemo)(),
      x(PercentageDemo)(),
      x(PanelDemo)(),
      x(CardDemo)(),
    ]),
    x(Container)([
      x(About)(),
      x(Usage)(),
      x(Features)(),
      x(CTA)(),
    ]),
    x(Footer)()
  ])
)

const initialState = {
  index: 0,
  color: colors[0],
  xray: false
}

module.exports = createProvider(initialState)(App)
