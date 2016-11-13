
import React from 'react'
import { withContext } from 'recompose'
import Header from './Header'

const App = () => (
  <div>
    <Header />
  </div>
)

const config = {
  colors: {
    black: '#000',
    white: '#fff',
    // blue: 'navy'
  }
}

export default withContext({
  axs: React.PropTypes.object
}, () => ({
  axs: config
}))(App)

