const colors = require('./colors')

const dec = state => ({ index: state.index - 1 })
const inc = state => ({ index: state.index + 1 })
const setIndex = index => state => ({ index })
const toggleXRay = state => ({ xray: !state.xray })

const cycleColor = state => {
  const i = (colors.indexOf(state.color) + 1) % colors.length
  return {
    color: colors[i]
  }
}

module.exports = {
  dec,
  inc,
  setIndex,
  toggleXRay,
  cycleColor,
}
