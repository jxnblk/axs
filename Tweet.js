
import React from 'react'
import { Box } from '../src'
import { Flex } from 'axs-ui'

export default props => (
  <Flex my2 {...props}>
    <Box
      is='a'
      className='twitter-share-button'
      href={`https://twitter.com/intent/tweet?text=${encodeURI('Axs: A build-your-own responsive typography and layout UI toolkit for React ')}`}
      data-via='jxnblk'
      children='Tweet' />
  </Flex>
)

