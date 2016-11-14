
import React from 'react'
import { Flex, Box, Text } from '../src'
import Container from './Container'
import Pre from './Pre'
import FormExample from './FormExample'

const example = `<Box p3 mb3 rounded white bgGrape>
  <Text size3 bold>Demo Box</Text>
</Box>
`

const Examples = () => (
  <Box is='section' px3 py4>
    <Container>
      <Flex mx-3 css={cx.row}>
        <Box px3 width={1} sm={1/2}>
          <Box p3 mb3 rounded white bgGrape>
            <Text size3 bold>Demo Box</Text>
          </Box>
        </Box>
        <Box px3 width={1} sm={1/2}>
          <Pre bgGray1 children={example} />
        </Box>
      </Flex>
      <FormExample />
    </Container>
  </Box>
)

const cx = {
  row: {
    flexWrap: 'wrap'
  }
}

export default Examples

