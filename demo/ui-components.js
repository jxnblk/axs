
import React from 'react'
import {
  Box,
  Text,
  Heading,
  Flex,
  Block,
  InlineBlock,
  Inline,
} from 'axs-ui'

const components = [
  {
    name: 'Heading',
    example: (
      <Heading level={3} size={2}>
        Hello
      </Heading>
    )
  },
  {
    name: 'Flex',
    example: (
      <Flex>
        <Box width={1/2} p1 bgGray1>Box</Box>
        <Box width={1/2} p1 bgGray2>Box</Box>
      </Flex>
    )
  },
  {
    name: 'Block',
    example: (
      <Block p1 bgGray1>
        Display Block
      </Block>
    )
  },
  {
    name: 'InlineBlock',
    example: (
      <InlineBlock p1 bgGray1>
        InlineBlock
      </InlineBlock>
    )
  },
  {
    name: 'Inline',
    example: (
      <Inline bold bgGray1>
        Inline
      </Inline>
    )
  },
]

export default components

