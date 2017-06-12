const x = require('reaxe')
const { connect } = require('funcup')
const {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError,
} = require('react-live')
const XRay = require('react-x-ray').default
const Axs = require('../src')
const Button = require('./Button')
const { toggleXRay } = require('./updaters')

const {
  Flex,
  Box,
  Heading,
  // Button,
} = Axs

const Demo = ({
  title,
  code = '',
  update,
  xray,
  color,
  height = '80vh'
}) => {
  const scope = {
    ...Axs,
    color,
  }

  return (
    x(Box)({
      css: {
        minHeight: height,
        overflow: 'hidden'
      }
    }, [
      x(Flex)({
        is: 'header',
        css: {
          alignItems: 'center',
          height: 48,
        }
      }, [
        x(Heading)({ f: [ 4, 3, 2 ] }, title),
        x(Button)({
          ml: 'auto',
          p: 1,
          f: 6,
          css: {
            textTransform: 'uppercase',
            letterSpacing: '.2em',
            fontWeight: 'bold',
            color: xray ? '#fff' : color[5],
            backgroundColor: xray ? color[5] : 'transparent',
            borderRadius: 2,
          },
          children: 'X-Ray',
          onClick: e => update(toggleXRay)
        }),
      ]),
      x(LiveProvider)({
        code,
        scope,
        mountStylesheet: false
      }, [
        x(Flex.wrap)({
          width: 1,
          css: {
            height: `calc(${height} - 48px)`,
          }
        }, [
          x(Flex)({
            width: [ 1, 2/3 ],
            css: {
              backgroundColor: color[0],
            }
          }, [
            x(XRay)({
              disabled: !xray,
              color: color[9],
              backgroundColor: color[1],
              center: true,
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }
            }, [
              x(Box)({
                width: 1,
                css: {
                  maxWidth: '100%',
                  overflow: 'auto'
                }
              }, [
                x(LivePreview)()
              ])
            ])
          ]),
          x(Box)({
            width: [ 1, 1/3 ],
            p: 2,
            css: {
              color: '#fff',
              backgroundColor: color[9]
            }
          }, [
            x(LiveError)({
              style: {
                padding: 16,
                color: '#fff',
                backgroundColor: '#f00',
                fontFamily: '"SF Mono", Menlo, monospace',
                fontSize: 12,
              }
            }),
            x(LiveEditor)({
              style: {
                fontSize: 12,
                minHeight: 128,
                maxHeight: `calc(${height} - 80px)`,
                overflow: 'auto'
              }
            }),
          ]),
        ])
      ])
    ])
  )
}

module.exports = connect()(Demo)
