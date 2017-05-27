const addpx = require('add-px-to-style')

const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

const clone = obj => Object.assign({}, obj)

const loop = (esc, mut) => obj => {
  console.log(obj)
  for (let key in obj) {
    if (esc(key, obj[key])) continue
    mut(obj, key)
  }
  console.log(obj)
  return obj
}

const BR = /[mp][trblxy]?-?[0-9]?/
const NR = /-/
const k = key => key.replace(/-|\d/g, '')
const bnum = key => parseInt(key.match(/\d/)[0]) * (NR.test(key) ? -1 : 1)
const bool = loop(
  (key, val) => val !== true || !BR.test(key),
  (obj, key) => {
    obj[k(key)] = bnum(key)
    delete obj[key]
  }
)

const shorthands = {
  w:  [ 'width' ],
  m:  [ 'margin' ],
  mt: [ 'marginTop' ],
  mr: [ 'marginRight' ],
  mb: [ 'marginBottom' ],
  ml: [ 'marginLeft' ],
  mx: [ 'marginLeft', 'marginRight' ],
  my: [ 'marginTop', 'marginBottom' ],
  p:  [ 'padding' ],
  pt: [ 'paddingTop' ],
  pr: [ 'paddingRight' ],
  pb: [ 'paddingBottom' ],
  pl: [ 'paddingLeft' ],
  px: [ 'paddingLeft', 'paddingRight' ],
  py: [ 'paddingTop', 'paddingBottom' ],
  fs: [ 'fontSize' ]
}
const short = loop(
  (key, val) => !shorthands[key],
  (obj, key) => {
    const long = shorthands[key]
    obj[long] = obj[key]
    delete obj[key]
  }
)

const AR = /^(margin|padding|width|fontSize)/
const arr = loop(
  (key, val) => !AR.test(key) || Array.isArray(val),
  (obj, key) => {
    obj[key] = [ obj[key] ]
  }
)

/*
const breakpoints = [
  40,
  52,
  64
].map(n => `@media screen and (min-width:${n}em)`)
const bp = loop(
  (key, val) => !Array.isArray(val),
  (obj, key) => {
    const arr = obj[key]
    arr.forEach((val, i) => {
      if (i === 0) {
        obj[key] = val
      } else {
        obj[breakpoints[i - 1]] = {
          [key]: val
        }
      }
    })
  }
)
*/

const num = n => typeof n === 'number' && !isNaN(n)
const w = n => num(n) ? (n > 1 ? n : (n * 100) + '%') : n
const width = loop(
  (key, val) => key !== 'width',
  (obj, key) => {
    obj[key] = obj[key].map(w)
  }
)

const SR = /^(margin|padding)/
const space = n => [ 0, 8, 16, 32, 64 ][n] || n
const neg = n => n < 0
const x = n => num(n) ? space(Math.abs(n)) * (neg(n) ? -1 : 1) : n
const scale = loop(
  (key, val) => !SR.test(key),
  (obj, key) => {
    obj[key] = obj[key].map(x)
  }
)

const typeScale = [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
const h = n => typeScale[n] || n
const font = loop(
  (key, val) => key !== 'fontSize',
  (obj, key) => {
    obj[key] = obj[key].map(h)
  }
)

const PR = /^(margin|padding|width|fontSize)/
const px = key => val => addpx(key, val)
const pixel = loop(
  (key, val) => !PR.test(key),
  (obj, key) => {
    obj[key] = obj[key].map(px(key))
  }
)

const parse = compose(
  pixel,
  font,
  scale,
  width,
  arr,
  short,
  bool,
  clone
)

module.exports = parse
