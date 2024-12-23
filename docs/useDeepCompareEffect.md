# useDeepCompareEffect

**A React hook that runs an effect only when dependencies change based on deep comparison.**

This hook ensures that the provided effect runs only when the dependencies have changed deeply, rather than relying on React's default shallow comparison.

## Parameters

- `callback` (`EffectCallback`): The function to execute when the dependencies change.
- `dependencies` (`DependencyList`): The list of dependencies to watch, compared deeply to determine changes.

## How It Works

- The hook uses `lodash`'s `isEqual` for deep comparison of dependencies.
- It stores the current dependencies in a `useRef` and updates them only if they differ from the previous dependencies.
- The `useEffect` hook is triggered with the deeply compared dependencies.

## Example Usage

```tsx
import React, { useState } from 'react';
import { useDeepCompareEffect } from 'react-hothook';

const ExampleComponent = () => {
  const [data, setData] = useState({ key: 'value' });

  useDeepCompareEffect(() => {
    console.log('Effect triggered due to deep change in dependencies:', data);
    // Perform actions like API calls or data processing here
  }, [data]);

  return (
    <div>
      <button onClick={() => setData({ key: 'value' })}>Set Same Data</button>
      <button onClick={() => setData({ key: 'newValue' })}>Set New Data</button>
    </div>
  );
};
```

## Benefits

- Avoids unnecessary re-renders or effect executions caused by shallow comparison of complex dependency objects.
- Simplifies working with deeply nested objects or arrays in React components.

## Notes

- This hook requires `lodash` for the `isEqual` function. Ensure `lodash` is installed in your project:

  ```bash
  npm install lodash
  ```
