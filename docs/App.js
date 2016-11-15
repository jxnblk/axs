
import React from 'react'
import { withContext } from 'recompose'
import Nav from './Nav'
import Header from './Header'
// import Features from './Features'
import Examples from './Examples'
import Footer from './Footer'

const App = () => (
  <div>
    <Nav />
    <Header />
    <Examples />
    <Footer />
  </div>
)

// export default App

export default withContext({
  axs: React.PropTypes.object
}, () => ({
  axs: {
    typeScale: [
      96,
      64,
      32,
      24,
      16,
      14,
      12,
    ]
  }
}))(App)

