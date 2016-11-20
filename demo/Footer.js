
import React from 'react'
import { Flex, Box, Text } from '../src'
import Link from './Link'
import Container from './Container'
import Logo from './Logo'

const Footer = () => (
  <Box is='footer'
    px3 py4>
    <Container>
      <Link
        mr2
        href='https://github.com/jxnblk/axs'
        children='GitHub' />
      <Link
        mr2
        href='https://npmjs.com/package/axs'
        children='npm' />
      <Link
        mr2
        href='http://jxnblk.com'
        children='Made by Jxnblk' />
    </Container>
    <Flex py4 my4 grape css={{ justifyContent: 'space-around' }}>
      <Logo size={48} />
    </Flex>
  </Box>
)

export default Footer

