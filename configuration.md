
## Configuration

Custom configurations can be set with the Config class instance.
Be sure to set configuration before rendering.

```js
import { config } from 'axs'

config.set({
  breakpoints: [
    '(min-width:40em)',
    '(min-width:48em)',
    '(min-width:56em)'
  ].map(w => `@media screen and ${w}`),
  typeScale: [
    72, 48, 36, 24, 18, 16, 12
  ],
  scale: [
    0, 6, 12, 24, 48
  ],
  radius: 3,
  bold: 600
})
```

