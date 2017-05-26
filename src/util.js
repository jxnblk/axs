const addpx = require('add-px-to-style')

const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

const map = fn => a => a.map(fn)
const arr = v => Array.isArray(v) ? v : [v]
const join = a => a.join('')

const space = n => [ 0, 8, 16, 32, 64 ][n] || n

const t = v => v !== null && typeof v !== 'undefined'
const px = key => v => addpx(key, v)
const k = (...k) => p => k.reduce((a, b) => t(a) ? a : p[b], null)
const num = n => typeof n === 'number' && !isNaN(n)
const wx = n => num(n) ? (n > 1 || n === 0) ? n : (n * 100) + '%' : n
const neg = n => n < 0
const scale = n => num(n) ? space(Math.abs(n)) * (neg(n) ? -1 : 1) : n
const val = v => typeof v !== 'undefined' ? v : null

const kebab = s => ('' + s).replace(/[A-Z]|^ms/g, '-$&').toLowerCase()

module.exports = {
  compose,
  map,
  arr,
  join,
  px,
  k,
  num,
  wx,
  neg,
  scale,
  val,
  kebab,
  t
}
