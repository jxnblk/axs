
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
    letterSpacing: '.1em',
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
      <g id='lumberjack' opacity='0'>
        <rect width='64' height='64' fill='#f40' />
        <g>
          <rect width='64' height='16' y='8' fill='#003' opacity={1/2} />
          <rect width='64' height='16' y='40' fill='#003' opacity={1/2} />
          <rect width='16' height='64' x='8' fill='#003' opacity={1/2} />
          <rect width='16' height='64' x='40' fill='#003' opacity={1/2} />
        </g>
      </g>
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
