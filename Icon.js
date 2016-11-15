
import React from 'react'
import css from '../../san-francisco/sf-css'

const sx = {
  root: {
    display: 'block',
    margin: 0
  },
  text: {
    fontFamily: '"San Francisco", "Roboto Mono", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: 20,
    fontWeight: 600
  }
}
const Icon = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <svg
      viewBox='0 0 64 64'
      width='512'
      height='512'
      style={sx.root}
    >
      <rect width='64' height='64' fill='#be4bdb' />
      <text
        x='32'
        y='38'
        fill='white'
        style={sx.text}
        textAnchor='middle'>
        Axs
      </text>
    </svg>
  </div>
)

export default Icon
