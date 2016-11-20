
import React from 'react'
import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  Block,
  InlineBlock,
  Inline,
  Label,
  Input,
  Select,
  Textarea,
  Slider,
  Progress,
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
    name: 'Button',
    example: (
      <Button
        href='#Button'
        children='Button'
      />
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
    name: 'Slider',
    example: (
      <Box>
        <Label htmlFor='slider'>
          Slider
        </Label>
        <Slider
          id='slider'
          name='slider'
          grape
          defaultValue={100/8} />
      </Box>
    )
  },
  {
    name: 'Progress',
    example: (
      <Progress
        grape
        value={1/4}>
        25%
      </Progress>
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

