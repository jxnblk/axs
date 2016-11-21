
import React from 'react'
import { Box, config } from '../src'
import Logo from './Logo'

const css = `body{margin:0}svg{overflow:visible}`

const MiniIcon = () => (
  <div style={{ padding: 32 }}>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <Logo
      color={config.colors.grape}
      size={128} />
  </div>
)

export default MiniIcon

