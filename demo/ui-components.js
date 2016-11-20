
import React from 'react'
import {
  Box,
  Text,
  Heading,
  Flex,
  Block,
  InlineBlock,
  Inline,
  Label,
  Input,
  Select,
  Textarea,
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
    name: 'Label',
    example: (
      <Label htmlFor='input'>
        Label
      </Label>
    )
  },
  {
    name: 'Input',
    example: (
      <Box>
        <Label htmlFor='input'>
          Input
        </Label>
        <Input
          id='input'
          name='input'
          defaultValue='Hello' />
      </Box>
    )
  },
  {
    name: 'Select',
    example: (
      <Box>
        <Label htmlFor='select'>
          Select
        </Label>
        <Select
          id='select'
          name='select'
          defaultValue='Hello'>
          <option>Hello</option>
          <option>Two</option>
          <option>Four</option>
          <option>Eight</option>
        </Select>
      </Box>
    )
  },
  {
    name: 'Textarea',
    example: (
      <Box>
        <Label htmlFor='textarea'>
          Textarea
        </Label>
        <Textarea
          id='textarea'
          name='textarea'
          rows={4}
          defaultValue='Hello' />
      </Box>
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

