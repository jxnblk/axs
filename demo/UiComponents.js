
import React from 'react'
import { colors } from 'axs'
import { Box, Heading } from 'axs-ui'

import components from './ui-components'
import ExamplePre from './ExamplePre'

const Link = props => (
  <Box
    is='a'
    css={{
      textDecoration: 'none',
      color: 'inherit',
      ':hover': {
        textDecoration: 'underline'
      },
      ':focus': {
        outline: 'none',
        textDecoration: 'underline',
        color: colors.grape
      }
    }}
    {...props}
  />
)

const UiComponents = () => (
  <Box>
    {components.map((comp, i) => (
      <Box key={i} id={comp.name} py3>
        <Heading level={3} mb2>
          <Link href={`#${comp.name}`}>
            {comp.name}
          </Link>
        </Heading>
        <ExamplePre example={comp.example} />
      </Box>
    ))}
  </Box>
)

export default UiComponents

