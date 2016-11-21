
import React from 'react'
import { Box, Text } from '../src'
import { Flex } from 'axs-ui'
import Link from './Link'
import Container from './Container'
import Logo from './Logo'

const Footer = () => (
  <Box is='footer' py4>
    <Container>
      <Flex direction={[ 'column', 'row' ]}>
        <Link
          mr2
          to='/'
          children='Home' />
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
        <Link
          ml='auto'
          href='http://jxnblk.com'
          children='Made by Jxnblk' />
      </Flex>
    </Container>
    <Flex py4 my4 grape justifyContent='space-around'>
      <Logo size={48} />
    </Flex>
  </Box>
)

export default Footer

