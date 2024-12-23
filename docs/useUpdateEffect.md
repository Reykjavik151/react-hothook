# useUpdateEffect

**A hook that extends React.useEffect by skipping the initial call on mount.**

This hook behaves like `useEffect`, but it skips executing the callback during the initial render and only responds to dependency updates.

## Parameters

- `callback` (function): The function to be executed when the dependencies change. This function will not be called on the first render.
- `deps` (React.DependencyList): An array of dependencies that will trigger the `callback` when they change.

## How It Works

- The hook uses a `useRef` to track whether it is the first render.
- On the first render, the callback is skipped by returning early.
- Subsequent updates to the dependencies trigger the `callback` as expected.

## Example Usage

```tsx
import React, { useState } from 'react';
import { useUpdateEffect } from 'react-hothook';

const Example = () => {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    console.log(`Count updated to: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
```

## Benefits

- Prevents unwanted execution of side effects during the initial render.
- Useful for scenarios where effects should only run after the component has mounted and dependencies have changed.
- Reduces the need for additional logic to differentiate between initial and subsequent renders.

## Notes

- This hook relies on `useRef` to track the first render, ensuring the callback is skipped only once.
- Make sure to include all relevant dependencies in the `deps` array to avoid missing updates.
- Avoid using this hook if the effect should also run on the initial render; use `useEffect` instead in such cases.
