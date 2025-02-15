# useDebouncedCallback

**A hook that returns a debounced callback function, delaying its execution until after a specified delay period.**

This hook is useful when you want to debounce event handlers, API calls, or other functions to improve performance and prevent excessive executions.

## Parameters

- `callback` (function): The function that needs to be debounced.
- `dependencies` (array): Dependencies that trigger the recreation of the debounced function.
- `delay` (number): The delay in milliseconds before executing the callback.

## Return Value

- `debouncedCallback` (function): A debounced version of the original callback.

## Example Usage

```tsx
import React, { useState } from 'react';
import { useDebouncedCallback } from 'react-hothook';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');

  const debouncedSearch = useDebouncedCallback(
    (value) => {
      console.log('Searching for:', value);
    },
    [inputValue],
    500
  ); // 500ms debounce

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          debouncedSearch(e.target.value);
        }}
        placeholder='Type to search'
      />
    </div>
  );
};
```

## How It Works

1. The `useDebouncedCallback` hook wraps the provided callback function with a debounce mechanism using `setTimeout`.
2. If the function is called again before the delay period ends, the previous timer is cleared and restarted.
3. After the delay period, the function executes with the latest arguments provided.

## Benefits

- Reduces the frequency of expensive operations, such as API requests.
- Improves performance in applications with frequent input changes.
- Works seamlessly with React hooks like `useEffect` and `useState`.

This hook is especially useful in cases like search inputs, form validation, or preventing excessive re-renders from rapid state updates.
