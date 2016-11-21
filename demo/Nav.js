
import React from 'react'
import { Box, colors } from '../src'
import { Flex } from 'axs-ui'
import Link from './Link'
import Travis from './Travis'
import Tweet from './Tweet'
import Star from './Star'
import Logo from './Logo'

const Nav = () => (
  <Flex px3 py2 wrap align='center'>
    <Flex width={[ 1, 1/2 ]} align='center'>
      <Link p0
        title='Home'
        to='/'>
        <Logo color={colors.grape} size={32} mr2 />
      </Link>
      <Link
        mr2
        to='/ui'
        children='Axs UI' />
      <Link
        mr2
        href='https://github.com/jxnblk/axs'
        children='GitHub' />
      <Link
        mr2
        href='https://npmjs.com/package/axs'
        children='npm' />
    </Flex>
    <Flex ml={[ null, 'auto' ]}>
      <Travis />
      <Star />
      <Tweet />
    </Flex>
  </Flex>
)

export default Nav

