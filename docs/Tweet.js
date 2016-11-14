
import React from 'react'
import { Flex, Box } from '../src'

export default props => (
  <Flex my2 {...props}>
    <Box
      is='a'
      className='twitter-share-button'
      href={`https://twitter.com/intent/tweet?text=${encodeURI('Axs: React UI component primitive toolkit')}`}
      data-via='jxnblk'
      children='Tweet' />
  </Flex>
)

