const x = require('reaxe')
const { connect } = require('funcup')
const { Chevron } = require('reline')
const {
  Flex,
  Box,
  Button,
} = require('../src')
const { dec, inc } = require('./updaters')

const Controls = connect()(props => x.div([
  x(Flex)({
    // ml: [ 0, 2 ],
    css: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      alignItems: 'center',
    }
  }, [
    x(Button)({
      px: 1,
      disabled: props.index < 1,
      onClick: e => props.update(dec),
      css: {
        opacity: props.index < 1 ? 1/4 : 3/4,
        mixBlendMode: 'multiply',
        cursor: 'pointer',
        color: props.color[5]
      }
    }, [
      x(Chevron)({ size: 24, left: true })
    ])
  ]),
  x(Flex)({
    // mr: [ 0, 2 ],
    css: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      alignItems: 'center'
    }
  }, [
    x(Button)({
      px: 1,
      onClick: e => props.update(inc),
      css: {
        opacity: 3/4,
        mixBlendMode: 'multiply',
        cursor: 'pointer',
        color: props.color[5]
      }
    }, [
      x(Chevron)({ size: 24, right: true })
    ])
  ])
]))

module.exports = Controls
