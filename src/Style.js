import React from 'react'

const Style = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

export default Style
