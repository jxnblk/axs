
require('babel-register')
const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const chalk = require('chalk')
const createHtml = require('./entry')

const routes = [
  '/',
  '/ui'
]

const createPage = (route) => {
  const html = createHtml({ path: route })
  const dir = path.join(__dirname, route)
  const filename = path.join(dir, 'index.html')
  mkdirp.sync(dir)
  fs.writeFileSync(filename, html)
  console.log(
    chalk.black.bgCyan.bold('OK'),
    chalk.yellow(filename)
  )
}

routes.forEach(createPage)
