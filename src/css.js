import stylis from 'stylis'

let _id = 0
const uuid = () => 'axs' + (_id++).toString(36)
let cache = {}

export const rules = []

export const createCSS = str => {
  const cn = cache[str] || uuid()
  const css = stylis('.' + cn, str)
  if (!cache[str]) {
    rules.push(css)
  }
  cache[str] = cn
  return cn
}

export const reset = () => {
  while (rules.length) rules.pop()
  cache = {}
}
