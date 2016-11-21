
module.exports = ({
  app = '',
  css,
  basehref = '/'
}) => (`
<!DOCTYPE html>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<title>Axs</title>
<meta name='description' content='A build-your-own responsive typography and layout UI toolkit for React'>
<meta name='twitter:card' content='summary_large_image'>
<meta name='twitter:site' content='@jxnblk'>
<meta name='og:title' content='Axs'>
<meta name='og:description' content='A build-your-own responsive typography and layout UI toolkit for React'>
<meta name='og:image' content='http://jxnblk.com/axs/tricard2.png'>
<style>*{box-sizing:border-box}body{ font-family:-apple-sytem,BlinkMacSystemFont,sans-serif; line-height:1.5; margin:0 }code{font-family:Menlo,monospace;font-size:87.5%}</style>
<style>${css}</style>
<div id='app'>${app}</div>
<script src='${basehref}bundle.js'></script>
<script id='twitter-wjs' src='https://platform.twitter.com/widgets.js' async></script>
<script>
(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");
</script>
`)

