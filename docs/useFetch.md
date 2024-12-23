# useFetch

**A hook to fetch data from an API with built-in async state management.**

This hook simplifies data fetching by combining the Fetch API with the `useAsync` hook, providing a declarative and reactive way to manage API requests.

## Parameters

- `url` (string): The API endpoint to fetch data from.
- `options` (optional, `RequestInit`): Additional fetch options (e.g., headers, method, body). Defaults to:
  ```json
  {
    "headers": {
      "Content-Type": "application/json"
    }
  }
  ```

## Return Values

The hook leverages the `useAsync` hook to return:

- `data` (any): The response body from the API if the request is successful.
- `error` (Error | null): An error object if the request fails.
- `isLoading` (boolean): Indicates whether the fetch request is in progress.

## Example Usage

```tsx
import React from 'react';
import { useFetch } from 'react-hothook';

const FetchExample = () => {
  const { data, error, isLoading } = useFetch('https://api.example.com/data', {
    method: 'GET'
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

## How It Works

1. Combines `fetch` with the `useAsync` hook to manage asynchronous state (`isLoading`, `error`, and `data`).
2. Merges default headers (`Content-Type: application/json`) with any custom headers provided in `options`.
3. Automatically parses JSON responses and throws an error for failed requests.

## Notes

- Ensure the API endpoint returns JSON responses for compatibility.
- For complex headers or additional logic, extend the `options` parameter as needed.