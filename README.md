
# Axs

Stupid simple style components for React

If you know React and you know CSS, you already know how to use this.

[![Build Status][badge]][travis]

[badge]: https://img.shields.io/travis/jxnblk/axs/master.svg?style=flat-square
[travis]: https://travis-ci.org/jxnblk/axs

![Axs](/docs/logo.png?raw=true)

```sh
npm i axs
```

```jsx
const Heading = props => (
  <Base.h1
    {...props}
    css={`
    `}
  />
)
```

## Features

- Minimal API surface
- One component, three props
- React component-based API
- Server side rendering with no additional setup
- Works in iframes
- 0.7 kb

<!--
### `is`

The `is` prop allows the element's HTML tag to be changed on a per-instance basis.
This is helpful for ensuring HTML semantics and expanding upon the core set of Axs primitive components.

```jsx
// documents should only have one <h1> tag
<Heading is='h1' />
// creating a custom input from the <Box /> component
<Box is='input' css={css} />
```
-->

## Usage

- Basic
- HTML elements
- Dynamic styles
- Removing style props
- Styling other components
- Extending components
- Server side rendering
- Animation
- Theming

## API



### Related

- [styled-components](https://github.com/styled-components/styled-components)
- [glamor](https://github.com/threepointone/glamor)
- [glamorous](https://github.com/paypal/glamorous)
- [jsxstyle](https://github.com/smyte/jsxstyle)


> A hand axe is a prehistoric stone tool with two faces that is the longest-used tool in human history.


[MIT License](LICENSE.md)

[stylis]: https://github.com/thysultan/stylis.js
[styled-components]: https://github.com/styled-components/styled-components
