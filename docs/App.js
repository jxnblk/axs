
import React from 'react'
import { withContext } from 'recompose'
import Header from './Header'

const App = () => (
  <div>
    <Header />
  </div>
)

export default App

/*
export default withContext({
  axs: React.PropTypes.object
}, () => ({
  axs: config
}))(App)
*/

