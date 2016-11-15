
import React from 'react'
import { Flex, Box } from '../src'
import Link from './Link'
import Travis from './Travis'
import Tweet from './Tweet'
import Star from './Star'

const Space = props =>
  <Box {...props}
    css={cx.space} />

const Nav = () => (
  <Flex px3 py2 css={cx.root}>
    <Link
      mr2
      href='https://github.com/jxnblk/axs'
      children='GitHub' />
    <Link
      mr2
      href='https://npmjs.com/package/axs'
      children='npm' />
    <Space />
    <Travis />
    <Star />
    <Tweet />
  </Flex>
)

const cx = {
  root: {
    flexWrap: 'wrap'
  },
  space: {
    flex: '1 1 auto'
  }
}

export default Nav

