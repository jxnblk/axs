
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
const Heading = props =>
  <Base.h2
    {...props}
    css={`
      color: tomato;
    `}
  />
```

> A hand axe is a prehistoric stone tool... the longest-used tool in human history.

## Features

- Minimal API surface area
- One component, three props
- React component-based API
- Server side rendering with no additional setup
- Works in iframes
- 0.7 kb

## Usage

### Basic

Create components by wrapping the Base component and passing props and a `css` prop to add style.

```jsx
const Heading = props =>
  <Base
    {...props}
    css={`
      color: tomato;
    `}
  />
```

### CSS syntax

The `css` prop uses [stylis][stylis] for a CSS-like syntax that also allows for pseudo-classes, media queries, animations, and nested selectors to be defined inline.
See the [stylis docs][stylis] for more info.

```jsx
const Heading = props =>
  <Base
    {...props}
    css={`
      color: tomato;
      &:hover {
        color: black;
      }
    `}
  />
```

### HTML elements

To change the underlying HTML element, pass a tag name to the `is` prop.

```jsx
const Heading = props =>
  <Base
    is='h1'
    {...props}
    css={`
      color: tomato;
    `}
  />
```

Alternatively, the Base component is decorated with keys for all valid HTML elements, which map to the `is` prop.

```jsx
const Heading = props =>
  <Base.h1
    {...props}
    css={`
      color: tomato;
    `}
  />
```

When using the component, the underlying element can be changed on a per-instance basis using the `is` prop.
This is especially helpful for ensuring the use of correct HTML semantics, while keeping the styles decoupled.

```jsx
<Heading is='h2'>
  Hello
</Heading>
```

### Dynamic styles

Styles can be set dynamically based on props.

```jsx
const Heading = props =>
  <Base.h2
    {...props}
    css={`
      color: ${props.color};
    `}
  />
```

Using the component above with a custom `color` passed as a prop would look like this:

```jsx
<Heading color='tomato'>
  Hello
</Heading>
```

**Note:** unlike other libraries like [styled-components][styled-components], the `css` prop takes a string, not a tagged template literal, so passing functions into the `css` prop will do nothing.

### Removing style props

To remove props used for styling from the underlying HTML element, use [destructuring][destructuring] to pick out the props used for styling.

```jsx
const Heading = ({ color, ...props }) =>
  <Base.h2
    {...props}
    css={`
      color: ${color};
    `}
  />
```

### Styling other components

To style other components, pass the component to the `is` prop.

```jsx
const Link = props =>
  <Base
    is={ReactRouter.Link}
    {...props}
    css={`
      color: #07c;
    `}
  />
```

### Extending components

To make an Axs component extensible, pass the `css` prop argument to the Base component's `css` prop after your base styles.

```jsx
const Heading = ({ css, ...props }) =>
  <Base.h2
    {...props}
    css={`
      font-size: 32px;
      ${css}
    `}
  />
```

Next, to make an extension from the base Heading component, pass it to the `is` prop.

```jsx
const BigHeading = props =>
  <Base
    {...props}
    is={Heading}
    css={`
      font-size: 64px;
    `}
  />
```

### Server side rendering

Server side rendering works without the need for any additional setup.
This is because CSS rulesets are created within the Base component,
which then renders an inline `<style>` element with the component's CSS.

To render in Node.js, be sure to use [CommonJS module syntax](https://nodejs.org/api/modules.html) or transpile ES modules to CommonJS syntax with a tool like [Babel](https://babeljs.io).

```js
const React = require('react')
const { renderToString } = require('react-dom')
const Base = require('axs')

const html = renderToString(
  React.createElement(Base, {
    css: `
      color: tomato;
    `
  }, 'Hello')
)
```

### Pseudo-classes

Since Axs uses [stylis][stylis] to parse strings to valid CSS,
pseudo-classes can be added to components with a syntax like the following.
The `&` refers to the component's generated className.

```jsx
const Link = props =>
  <Base.a
    {...props}
    css={`
      color: #07c;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    `}
  />
```

### Media queries

Media queries can also be handled inline with [stylis][stylis] syntax.

```jsx
const Heading = props =>
  <Base.h2
    {...props}
    css={`
      font-size: 32px;
      @media screen and (min-width: 40em) {
        font-size: 48px;
      }
    `}
  />
```

### Animation

CSS animations can also be handled with [stylis][stylis] syntax.

```jsx
const Heading = props =>
  <Base.h2
    {...props}
    css={`
      font-size: 32px;
      animation-name: pop;
      animation-timing-function: ease-in;
      animation-duration: .2s;

      @keyframes pop {
        0% { transform: scale(.75); }
        50% { transform: scale(1.125); }
        100% { transform: scale(1); }
      }
    `}
  />
```

### Theming

Theming can be added to any Axs component using the [theming][theming] library.

```jsx
import React from 'react'
import Base from 'axs'
import { withTheme, ThemeProvider } from 'theming'
import theme from './theme'

const Heading = withTheme(({ color, theme, ...props }) =>
  <Base.h2
    {...props}
    css={`
      color: ${theme.blue};
    `}
  />
)

const App = props => (
  <ThemeProvider theme={theme}>
    <Heading>
      Hello
    </Heading>
  </ThemeProvider>
)
```

## API

### Base

The Base component is a primitive React component that takes CSS as a prop, generates a unique className,
and renders an inline style element along with the component.
The `css` prop takes a string in a CSS-like syntax and uses [stylis][stylis] to create valid CSS rules.
By default the Base component renders an HTML `<div>` element.
To change the underlying HTML element, pass a tag to the `is` prop or use one of the keyed Base components.

```jsx
<Base
  is='h2'
  css='color:tomato;'
/>
```

```jsx
// using a Base component key
<Base.h2
  css='color:tomato;'
/>
```

Prop | Type | Description
---|---|---
`css` | String | [stylis][stylis] compatible CSS string to apply to the component
`is` | String or Component | sets the underlying HTML tag or React component to style
`innerRef` | Function | callback to get the component's [React ref](https://reactjs.org/docs/refs-and-the-dom.html)



### Related

- [styled-components](https://github.com/styled-components/styled-components)
- [glamor](https://github.com/threepointone/glamor)
- [glamorous](https://github.com/paypal/glamorous)
- [emotion](https://github.com/emotion-js/emotion)
- [styled-jsx](https://github.com/zeit/styled-jsx)
- [jsxstyle](https://github.com/smyte/jsxstyle)
- [styled-system](https://github.com/jxnblk/styled-system)
- [nano-style](https://github.com/jxnblk/nano-style)
- [cxs](https://github.com/jxnblk/cxs)


[MIT License](LICENSE.md)

[stylis]: https://github.com/thysultan/stylis.js
[styled-components]: https://github.com/styled-components/styled-components
[destructuring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[theming]: https://github.com/cssinjs/theming

