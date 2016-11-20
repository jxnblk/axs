
import React from 'react'
import { Box, Heading } from 'axs-ui'

import components from './ui-components'
import ExamplePre from './ExamplePre'

const UiComponents = () => (
  <Box>
    {components.map((comp, i) => (
      <Box key={i} id={comp.name} py3>
        <Heading level={3} mb2 children={comp.name} />
        <ExamplePre example={comp.example} />
      </Box>
    ))}
  </Box>
)

export default UiComponents

