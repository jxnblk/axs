import objss from 'objss'

const system = (...funcs) => props => funcs
  .map(func => func(props))
  .filter(obj => obj !== null)
  .map(objss)
  .join('')

export default system
