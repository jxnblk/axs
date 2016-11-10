
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Box,
  InlineBlock,
  Flex
} from '../src'

const App = () => (
  <Box p3>
    <h1>Bocxs</h1>
    <Box mx-3>
      <InlineBlock
        p3
        w={1}
        sw={1/3}
        mw={1/4}>
        Box
      </InlineBlock>
      <InlineBlock
        blue
        border={3}
        p3
        w={1} sw={1/3} mw={1/4}>2
      </InlineBlock>
      <InlineBlock
        display='inline-block'
        white
        bgBlue
        p3
        w={1} sw={1/3} mw={1/4}>
        3
      </InlineBlock>
      <InlineBlock
        p3 w={1} sw={1/3} mw={1/4}>4
      </InlineBlock>
    </Box>
  </Box>
)

ReactDOM.render(<App />, app)

