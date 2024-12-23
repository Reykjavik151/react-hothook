# usePrevious

**A hook to track and retrieve the previous state of a value.**

This hook allows you to capture the previous value of a state or prop, with the option to ignore specific values during updates.

## Parameters

- `value` (T): The current value whose previous state needs to be tracked.
- `valuesToIgnore` (optional, `Array<T>`): An array of values to ignore when saving the previous value. Defaults to an empty array (`[]`).

## Return Value

- `T | undefined`: The previous value of `value` or `undefined` if no previous value exists.

## How It Works

- Utilizes a `useRef` to store the previous value persistently across renders.
- Updates the `ref` only if the current `value` is not included in the `valuesToIgnore` array.
- Returns the value stored in the `ref` as the "previous" value.

## Example Usage

```tsx
import React, { useState } from 'react';
import { usePrevious } from 'react-hothook';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count, [0]); // Ignore 0 when tracking the previous value

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount !== undefined ? prevCount : 'None'}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
```

## Benefits

- Helps track historical state or props for comparison or debugging purposes.
- Flexible design allows ignoring specific values, making it useful for scenarios like reset states.

## Notes

- Ensure that the `valuesToIgnore` array is stable (e.g., use `useMemo` if dynamically created) to avoid unnecessary re-renders or incorrect behavior.
- The hook returns `undefined` initially as no previous value exists during the first render.
