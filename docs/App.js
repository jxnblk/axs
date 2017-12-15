import React from 'react'
// import connect from 'refunk'
import { fontSize, color } from 'styled-system'

import { Base, Provider } from '../src'

const Root = props => (
  <Base
    {...props}
    css={`
      font-family: -apple-system, system-ui, sans-serif;
      line-height: 1.5;
    `}
  />
)

const Heading = props => (
  <Base.h1
    {...props}
    css={`
      font-size: 48px;
      margin: 0;
      color: tomato;
    `}
    funcs={[
      fontSize,
      color
    ]}
  />
)

const Text = props => (
  <Base
    {...props}
    css={`
    `}
  />
)

const App = props => {
  return (
    <Provider>
      <Root>
        <Heading fontSize={64} color='lime'>Axs</Heading>
        <Text>
          Style components with a React-centric API
        </Text>
      </Root>
    </Provider>
  )
}

export default App
