# useSpecificKeyExtractor

**A hook to create a key extractor function for React list mapping.**

This hook simplifies generating unique keys for items in a list by providing a customizable key extractor function. It ensures that each item in the list has a stable and predictable key based on a field of the item and an optional prefix.

## Parameters

- `prefix` (string): A string that will be prepended to the generated key for each item.
- `field` (keyof TItem): The field of the item to be used as part of the key.

## How It Works

- Internally, the hook uses `useCallback` to create a memoized key extractor function. The function combines the provided `prefix`, the value of the specified `field` from the item, and the item's index to create a unique key.

## Example Usage

```tsx
import React from 'react';
import { useSpecificKeyExtractor } from 'react-hothook';

interface Item {
  id: string;
  name: string;
}

const Example = () => {
  const data: Item[] = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' }
  ];

  const keyExtractor = useSpecificKeyExtractor<Item>('item', 'id');

  return (
    <div>
      {data.map((item, index) => (
        <div key={keyExtractor(item, index)}>{item.name}</div>
      ))}
    </div>
  );
};
```

## Benefits

- Provides a reusable and customizable key extractor for React list mapping.
- Prevents unnecessary key regeneration on re-renders by memoizing the extractor function.

## Notes

- This hook is designed for any kind of React mapping where a key is required for each item.
- The `key` created by the hook combines the `prefix`, the value of the `field` from each item, and the item's index, ensuring that the key is unique and stable.
