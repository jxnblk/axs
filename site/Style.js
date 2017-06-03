const { style } = require('reaxe')

module.exports = ({ css = base }) => style({
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
`
