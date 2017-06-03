const colors = require('./colors')

const inc = state => {
  const i = state.count + 1
  const color = colors[Math.abs(i) % colors.length]
  return {
    count: i,
    color
  }
}

module.exports = {
  inc
}
