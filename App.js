
import React from 'react'
import { withContext } from 'recompose'
import Nav from './Nav'
import Header from './Header'
import Features from './Features'
import Usage from './Usage'
import Examples from './Examples'
import Cta from './Cta'
import Footer from './Footer'

const App = () => (
  <div>
    <Nav />
    <Header />
    <Usage />
    <Features />
    <Examples />
    <Cta />
    <Footer />
  </div>
)

export default withContext({
  axs: React.PropTypes.object
}, () => ({
  axs: {
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
  }
}))(App)

