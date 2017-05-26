const addpx = require('add-px-to-style')

const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

const scale = [ 0, 8, 16, 32, 64 ]

const t = v => v !== null && typeof v !== 'undefined'
const px = key => v => addpx(key, v)
const k = (...k) => p => k.reduce((a, b) => t(a) ? a : p[b], null)
const num = n => typeof n === 'number' && !isNaN(n)
const w = n => num(n) ? (n > 1 || n === 0) ? n : (n * 100) + '%' : n
const sx = n => scale[n] || n
const neg = n => n < 0
const x = n => num(n) ? sx(Math.abs(n)) * (neg(n) ? -1 : 1) : n
const val = v => typeof v !== 'undefined' ? v : null

module.exports = {
  compose,
  px,
  k,
  num,
  w,
  sx,
  neg,
  x,
  val,
  t
}
