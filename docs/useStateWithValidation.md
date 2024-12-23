# useStateWithValidation

**A hook that extends React.useState with a validation mechanism.**

This hook adds a third output value to the typical useState return array: a boolean `isValid` that indicates whether the current state passes a validation function.

## Parameters

- `initialValue` (T): The initial value of the state.
- `validator` (function): A function that takes the current state as input and returns a boolean indicating whether the state is valid.

## How It Works

- Internally, this hook uses `useState` to manage the current state and a secondary state to track validation status.
- The hook also uses `useUpdateEffect` to run the validator function whenever the state or validator function changes.
- The hook returns an array with three values:
  - `state`: The current state.
  - `setState`: A function to update the state.
  - `isValid`: A boolean that indicates if the current state passes the validation function.

## Example Usage

```tsx
import React from 'react';
import { useStateWithValidation } from 'react-hothook';

const Example = () => {
  const [name, setName, isNameValid] = useStateWithValidation<string>("", (value) => value.length > 3);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Name is {isNameValid ? "valid" : "invalid"}</p>
    </div>
  );
};
```

## Benefits

- Provides built-in validation for state values, reducing boilerplate code.
- Automatically revalidates the state whenever it changes, ensuring up-to-date validation status.
- Useful for form validation, input constraints, and conditional rendering based on state validity.

## Notes

- The `isValid` value will update every time the state or validator function changes.
- If the validator function depends on external variables, ensure they are included in its closure or dependency array to avoid stale validations.
- For complex validation logic, consider memoizing the validator function to optimize performance.