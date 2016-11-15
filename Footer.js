
import React from 'react'
import { Box, Text } from '../src'
import Link from './Link'
import Container from './Container'

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
  </Box>
)

export default Footer

