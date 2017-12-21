import React from 'react'
import Text from './Text'

const Heading = props =>
  <Text
    {...props}
    is='h1'
    fontSize={[
      6, 7, 8
    ]}
    css={`
      line-height: 1.25;
      margin: 0;
    `}
  />

export default Heading
