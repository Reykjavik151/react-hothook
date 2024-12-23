# useStateWithPrevious

**A hook that extends React.useState with a previous state.**

This hook adds a third output value to the typical useState return array: the previous state, which holds the value of the state before the most recent update. It enables you to track the last state without needing to manually manage it.

## Parameters

- `initialValue` (T): The initial value of the state, which will also serve as the first value of the state and the initial previous state.

## How It Works

- Internally, this hook uses `useState` to manage the current state and `usePrevious` to keep track of the previous state.
- The hook returns an array with three values:
  - `state`: The current state.
  - `setState`: A function to update the state.
  - `prevState`: The previous state value before the most recent update.

## Example Usage

```tsx
import React from 'react';
import { useStateWithPrevious } from 'react-hothook';

const Example = () => {
  const [count, setCount, prevCount] = useStateWithPrevious<number>(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
```

## Benefits

- Provides a simple way to track both the current and the previous state.
- Useful for scenarios where you need to compare the current state with its previous value or revert to the last state if needed.

## Notes

- The third value, `prevState`, will always hold the state value prior to the most recent update.
- If the state has never been updated, `prevState` will be `undefined`. This is especially useful for initializing logic based on state transitions.
