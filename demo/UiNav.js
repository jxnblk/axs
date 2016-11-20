
import React from 'react'
import { Box } from 'axs'
import components from './ui-components'
import Link from './Link'

const UiNav = (props) => (
  <Box {...props}>
    {components.map((comp, i) => (
      <Link
        key={i}
        display='block'
        py0
        mb1
        href={`#${comp.name}`}>
        {comp.name}
      </Link>
    ))}
  </Box>
)

export default UiNav

