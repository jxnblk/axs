
import React from 'react'
import { Box, colors } from '../src'
import Logo from './Logo'

const css = `body{margin:0}`

const MiniIcon = () => (
  <div style={{
    padding: 32
  }}>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <Logo
      color={colors.grape}
      size={128} />
  </div>
)

export default MiniIcon

