const x = require('reaxe')
const Demo = require('./Demo')

const GridDemo = props => x(Demo)({
  title: 'Grid',
  code
})

const code = `<Box p={3}>
  <Flex.wrap
    mx={-1}
    fontSize={6}
    css={{
      '& > div': {
        outline: '1px solid'
      }
    }}>
    <Box width={1/2} p={1}>1/2</Box>
    <Box width={1/2} p={1}>1/2</Box>

    <Box width={1/3} p={1}>1/3</Box>
    <Box width={1/3} p={1}>1/3</Box>
    <Box width={1/3} p={1}>1/3</Box>

    <Box width={1/4} p={1}>1/4</Box>
    <Box width={1/4} p={1}>1/4</Box>
    <Box width={1/4} p={1}>1/4</Box>
    <Box width={1/4} p={1}>1/4</Box>

    <Box width={1/5} p={1}>1/5</Box>
    <Box width={1/5} p={1}>1/5</Box>
    <Box width={1/5} p={1}>1/5</Box>
    <Box width={1/5} p={1}>1/5</Box>
    <Box width={1/5} p={1}>1/5</Box>

  </Flex.wrap>
</Box>`

module.exports = GridDemo
