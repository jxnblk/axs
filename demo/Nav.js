
import React from 'react'
import { Flex, Box, colors } from '../src'
import Link from './Link'
import Travis from './Travis'
import Tweet from './Tweet'
import Star from './Star'
import Logo from './Logo'

const Space = props =>
  <Box {...props}
    css={cx.space} />

const Nav = () => (
  <Flex px3 py2 css={cx.root}>
    <Flex width={[ 1, 1/2 ]} css={{ alignItems: 'center' }}>
      <Logo color={colors.grape} size={16} mr2 />
      <Link
        mr2
        href='https://github.com/jxnblk/axs'
        children='GitHub' />
      <Link
        mr2
        href='https://npmjs.com/package/axs'
        children='npm' />
    </Flex>
    <Space />
    <Flex css={{ width: 'auto' }}>
      <Travis />
      <Star />
      <Tweet />
    </Flex>
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

