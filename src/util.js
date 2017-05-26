const compose = (...fns) => {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

const num = n => typeof n === 'number' && !isNaN(n)

module.exports = {
  compose,
  num
}
