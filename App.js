
import React from 'react'
import { config } from '../src'
import { withContext  } from 'recompose'
import Nav from './Nav'
import Footer from './Footer'
import Index from './Index'
import UI from './UI'
import history from './history'

class App extends React.Component {
  constructor (props) {
    super()
    this.state = {
      path: props.path
    }
  }

  getChildContextTypes = () => {
    const { basehref } = this.props
    return {
      basehref
    }
  }

  componentDidMount () {
    const { pathname } = history.location
    this.setState({ path: pathname })
    history.listen(({ pathname }) => {
      this.setState({ path: pathname })
    })
  }

  render () {
    const { path } = this.state

    const view = path === '/ui' ? <UI /> : <Index />

    return (
      <div>
        <Nav />
        {view}
      </div>
    )
  }
}

App.childContextTypes = {
  basehref: React.PropTypes.string
}

export default App

