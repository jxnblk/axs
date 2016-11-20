
import React from 'react'
import { Box, colors } from '../src'
import { Flex } from 'axs-ui'
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
      <Link p0 href='/' to='/'>
        <Logo color={colors.grape} size={32} mr2 />
      </Link>
      <Link
        mr2
        href='/ui'
        to='/ui'
        children='UI' />
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
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  space: {
    flex: '1 1 auto'
  }
}

export default Nav
