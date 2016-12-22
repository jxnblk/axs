
import React from 'react'
import {
  Box,
  Heading,
  Text
} from 'axs-ui'
import Pre from './Pre'
import Dit from './Dit'

const UiHeader = () => (
  <Box py3>
    <Dit />
    <Heading level={1} fuschia>
      Axs UI
    </Heading>
    <Text bold fontSize={3} fuschia>
      UI Component Primitives
    </Text>
    <Pre fontSize={4} p0 py2>npm i axs-ui</Pre>
    <Text fontSize={[ 4, 3 ]} py2>
      In addition to the core Box and Text components,
      the optional <code>axs-ui</code> package includes several pre-styled UI component primitives.
    </Text>
  </Box>
)

export default UiHeader
