# useToggle

**A hook that extends React.useState for boolean values with a toggle function.**

This hook simplifies managing boolean state by providing a toggle function that flips the current value between `true` and `false`.

## Parameters

- `defaultValue` (boolean): The initial value of the boolean state.

## How It Works

- Internally, this hook uses `useState` to manage the boolean state.
- It provides a `toggleValue` function that toggles the current state without requiring any parameters.
- The hook returns an array with two values:
  - `isValue`: The current boolean state.
  - `toggleValue`: A function to toggle the boolean state.

## Example Usage

```tsx
import React from 'react';
import { useToggle } from 'react-hothook';

const Example = () => {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleIsOn}>Toggle Switch</button>
    </div>
  );
};
```

## Benefits

- Provides a simple and reusable way to manage boolean state.
- Reduces the need for manual state management logic when toggling boolean values.
- Ideal for UI components like switches, modals, and dropdowns.

## Notes

- The `toggleValue` function does not accept any parameters, as it is designed to invert the current boolean state.
- If you need more control over state changes, consider extending this hook or combining it with other hooks for additional logic.
