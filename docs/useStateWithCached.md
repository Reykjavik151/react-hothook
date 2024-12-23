
# useStateWithCached

**A hook that extends `React.useState` with a cached non-empty state.**

This hook adds a third output value to the typical `useState` return array: the cached state that holds the latest non-empty value. It allows you to track the most recent valid (non-null and non-undefined) state without recalculating it.

## Parameters

- `initialValue` (T): The initial value of the state, which will also serve as the third output value of the state and the previous non-empty state.

## How It Works

- Internally, this hook uses `useState` to manage the current state and `useCached` to retrieve the latest non-empty state. 
- The hook returns an array with three values:
  - `state`: The current state, which can include `undefined` and `null`.
  - `setState`: A function to update the state.
  - `cachedState`: The latest non-empty state (a value that is neither `null` nor `undefined`).

## Example Usage

```tsx
import React from 'react';
import { useStateWithCached } from 'react-hothook';

const Example = () => {
  const [count, setCount, cachedCount] = useStateWithCached<number>(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Cached Count: {cachedCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

## Benefits

- Provides an easy way to track both the current and the most recent non-empty state.
- Useful for scenarios where you need to remember the last valid state before it was overwritten by `null` or `undefined`.

## Notes

- The third value, `cachedState`, will always hold the most recent state that is not `null` or `undefined`.
- If the state is `null` or `undefined`, `cachedState` will retain the last valid state.
