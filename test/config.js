
import test from 'ava'
import config, { defaultConfig } from '../src/config'

test('returns a config object', t => {
  const styles = config.get()
  t.is(typeof styles, 'object')
  t.is(typeof styles.colors, 'object')
  t.is(typeof styles.bold, 'number')
  t.true(Array.isArray(styles.breakpoints))
  t.true(Array.isArray(styles.scale))
  t.true(Array.isArray(styles.typeScale))
})

test('returns the default config', t => {
  const styles = config.get()
  t.deepEqual(styles, defaultConfig)
})

test('set method changes config', t => {
  const scale = [ 0, 6, 12, 24, 48 ]
  config.set({ scale })
  const styles = config.get()
  t.deepEqual(styles.scale, scale)
})

test('reset method sets default', t => {
  config.reset()
  const styles = config.get()
  t.deepEqual(styles.scale, defaultConfig.scale)
})

