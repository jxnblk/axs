
import React from 'react'
import { Flex, Box } from '../src'
import Link from './Link'
import Tweet from './Tweet'
import Star from './Star'

const Space = props =>
  <Box {...props}
    css={{
      flex: '1 1 auto'
    }} />

const Nav = () => (
  <Flex px3 py2>
    <Link
      mr2
      href='https://github.com/jxnblk/axs'
      children='GitHub' />
    <Link
      mr2
      href='https://npmjs.com/package/axs'
      children='npm' />
    <Space />
    <Star />
    <Tweet />
  </Flex>
)

export default Nav

