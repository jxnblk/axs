
# Axs UI

UI component primitives built with Axs

http://jxnblk.com/axs/ui

```sh
npm i axs-ui
```

```jsx
// Example
import {
  Heading,
  Flex,
  Button
} from 'axs-ui'

const Header = () => (
  <Flex>
    <Heading>Hello</Heading>
    <Button>Go</Button>
  </Flex>
)
```

## Components

- [Heading](#Heading)
- [Flex](#Flex)
- [Button](#Button)
- [Label](#Label)
- [Input](#Input)
- [Select](#Select)
- [Textarea](#Textarea)
- [Radio](#Radio)
- [Checkbox](#Checkbox)
- [Slider](#Slider)
- [Progress](#Progress)
- [InlineBlock](#InlineBlock)
- [Span](#Span)

### Heading

Heading element with `level` prop for setting element type.

```jsx
<Heading level={1}>Renders an h1 element</Heading>
```

### Flex

Box component with `display: flex`.
Uses array prop types for responsive styles.

```jsx
<Flex
  align='center'
  direction={[
    'column',
    'row'
  ]}
  justify='space-between'
/>
```

**Flex props**
- `wrap` (boolean or array) - sets `flex-wrap: wrap`
- `direction` (string or array) - sets `flex-direction`
- `align` (string or array) - sets `align-items`
- `justify` (string or array) - sets `justify-content`

### Button

```jsx
<Button>Go</Button>
```

### Label

```jsx
<Label>Label</Label>
```

### Input

```jsx
<Input
  name='input'
  value='Hello'
  onChange={onChange}
/>
```

### Select

```jsx
<Select
  name='select'
  value='Hello'
  onChange={onChange}>
  <option>Hello</option>
  <option>Hi</option>
</Select>
```

### Textarea

```jsx
<Textarea
  name='textarea'
  value='Hello'
  onChange={onChange}
/>
```

### Radio

```jsx
<label>
  <Radio
    name='radio'
    checked={checked}
    onClick={onClick}
  />
  Radio
</label>
```

### Checkbox
```jsx
<label>
  <Checkbox
    name='checkbox'
    checked={checked}
    onClick={onClick}
  />
  Checkbox
</label>
```

### Slider

```jsx
<Slider
  name='slider'
  value={32}
  onChange={onChange}
/>
```

### Progress

```jsx
<Progress value={1/4}>
  25%
</Progress>
```

### InlineBlock

```jsx
<InlineBlock width={1/4}>
  InlineBlock
</InlineBlock>
```

### Span

```jsx
<Span blue>
  Span
</Span>
```

---

- [-] Select

- [ ] Link
- [ ] Pre
- [ ] Code
- [ ] Blockquote
- [ ] List

MIT License

