### useAsync

**Wrapper for async functions that manages their Promise lifecycle and state.**

Return values:

- `data`: The resolved value of the async function once it completes successfully.
- `error`: The error object if the async function throws or rejects.
- `isLoading`: A boolean indicating whether the async function is still running.

```tsx
import React from 'react';
import { useAsync } from 'react-hothook';

// API call simulation
const delayedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolved after 1 second');
    }, 1000);
  });
};

const MyComponent = () => {
  const { data, error, isLoading } = useAsync(delayedPromise);

  // Example usage with UI
  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>Something went wrong</p> : null}
      {data ? <p>{data}</p> : null}
    </div>
  );
};
```
