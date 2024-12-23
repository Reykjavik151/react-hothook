# useMount

**A hook to run a function only once when the component mounts.**

This hook provides a cleaner and more descriptive abstraction for running side effects during the mount phase of a component's lifecycle.

## Parameters

- `func` (function): The function to execute when the component mounts.

## How It Works

- Internally uses the `useEffect` hook with an empty dependency array (`[]`), ensuring that the provided `func` runs only once, when the component is first added to the DOM.

## Example Usage

```tsx
import React from 'react';
import { useMount } from 'react-hothook';

const MountExample = () => {
  useMount(() => {
    console.log('Component has mounted!');
    // Perform initialization or setup logic here
  });

  return <div>Check the console to see the mount log.</div>;
};
```

## Benefits

- Simplifies the intent of running code on mount by abstracting the `useEffect` boilerplate.
- Provides semantic clarity for lifecycle actions.

## Notes

- This hook is a shorthand for `useEffect(func, [])` and is especially useful for initialization or one-time setup logic.
- Ensure that `func` does not rely on external variables unless those variables are stable, as the hook does not track dependencies.
