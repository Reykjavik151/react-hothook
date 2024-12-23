### useCached

Returns the cached non-empty value of the current value.
<br />
Do not consider any `null`, `undefined` and `NaN` values (or similar).

```ts
import { useCached } from 'react-hothook';

const MyComponent = () => {
  const [state, setState] = useState(0);
  const cachedState = useCached(state);

  // state: 0, cachedState: 0
  // state: 1, cachedState: 1,
  // state: 2, cachedState: 2,
  // state: undefined, cachedState: 2,
  // state: null, cachedState 2,
  // state: 10, cachedState: 10,
  // state: 11, cachedState: 11,
  // ...
};
```
