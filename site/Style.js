const { style } = require('reaxe')

const Style = ({ css = base }) => style({
  dangerouslySetInnerHTML: {
    __html: css
  }
})

const base = `*{box-sizing: border-box}
body{
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  margin: 0;
}
.prism-code {
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 14px;
  tab-size: 2;
  outline: none;
}
`

module.exports = Style
