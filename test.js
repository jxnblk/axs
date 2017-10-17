const test = require('ava')
const h = require('react').createElement
const render = require('react-test-renderer').create
const Axs = require('./')
const AxsGlamorous = require('./glamorous')
const AxsEmotion = require('./emotion')
const AxsFela = require('./fela')
const fela = require('fela')
const reactFela = require('react-fela')
const { ThemeProvider } = require('theming')

Object.keys(Axs)
  .filter(key => !/^(index|lab|theme)$/.test(key))
  .forEach(key => {
  test(`${key} styled-components renders`, t => {
    const json = render(h(Axs[key])).toJSON()
    t.snapshot(json)
  })
})

Object.keys(AxsGlamorous)
  .filter(key => !/^(index|lab|theme)$/.test(key))
  .forEach(key => {
  test(`${key} glamorous renders`, t => {
    const json = render(h(AxsGlamorous[key])).toJSON()
    t.snapshot(json)
  })
})

Object.keys(AxsEmotion)
  .filter(key => !/^(index|lab|theme)$/.test(key))
  .forEach(key => {
  test(`${key} emotion renders`, t => {
    const json = render(h(ThemeProvider, { theme: {} }, h(AxsEmotion[key]))).toJSON()
    t.snapshot(json)
  })
})

// todo: figure out how fela's api even works
const FelaRoot = props => h(reactFela.Provider, Object.assign({
  renderer: fela.createRenderer()
}, props))

Object.keys(AxsFela)
  .filter(key => !/^(index|lab|theme)$/.test(key))
  .forEach(key => {
  test.skip(`${key} fela renders`, t => {
    const json = render(h(FelaRoot, null, h(AxsFela[key]))).toJSON()
    t.snapshot(json)
  })
})

