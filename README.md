<div align="center">
  <h1>
    react-hothook
    <br />
    <a href="https://www.npmjs.com/package/react-hothook">
       <img src="https://img.shields.io/npm/v/react-hothook.svg" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/react-hothook">
      <img src="https://img.shields.io/npm/dm/react-hothook.svg" alt="npm downloads" />
    </a>
  </h1>
    Set of optimized <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>.</em>
    <br />
    <br />
    <br />
    <br />
    <br />
  <sup>
    <br />
    <br />
    
  </sup>
  <pre>npm i <a href="https://www.npmjs.com/package/react-use">react-hothook</a></pre>
  <pre>yarn add <a href="https://www.npmjs.com/package/react-use">react-hothook</a></pre>

</div>

- **Hooks**

  - [`useAsync`](./docs/useAsync.md) &mdash; provides a functionality for async functions
  - [`useCached`](./docs/useCached.md) &mdash; saves only not empty, not undefined and not null values
  - [`useCountdown`](./docs/useCountdown.md) &mdash; manages a customizable countdown timer with lifecycle events, including pause, resume, reset, and update capabilities
  - [`useDebouncedCallback`](./docs/useDebouncedCallback.md) &mdash; provides debounced modification for default react's useCallback
  - [`useDebouncedValue`](./docs/useDebouncedValue.md) &mdash; debounces a value, updating it only after a specified delay to optimize performance and prevent frequent updates
  - [`useDeepCompareEffect`](./docs/useDeepCompareEffect.md) &mdash; runs an effect only when the dependencies change based on a deep comparison using lodash's isEqual function, avoiding unnecessary executions caused by shallow comparison of complex objects or arrays
  - [`useFetch`](./docs/useFetch.md) &mdash; simplifies data fetching by combining the Fetch API with the useAsync hook, providing reactive state management for data, error, and isLoading
  - [`useMount`](./docs/useMount.md) &mdash; runs a function only once when the component mounts, providing a cleaner abstraction for lifecycle setup logic
  - [`usePrevious`](./docs/usePrevious.md) &mdash; tracks and retrieves the previous state or prop value, with an option to ignore specific values during updates
  - [`useSpecificKeyExtractor`](./docs/useSpecificKeyExtractor.md) — creates a customizable and memoized key extractor function for React list mapping, ensuring unique and stable keys based on a specified field and optional prefix
  - [`useStateWithCached`](./docs/useStateWithCached.md) &mdash; extends React's useState to include a cached non-empty state
  - [`useStateWithPrevious`](./docs/useStateWithPrevious.md) &mdash; extends React's useState to include the previous state value
  - [`useStateWithValidation`](./docs/useStateWithValidation.md) &mdash; extends React's useState with a validator function to track the validity of the state
  - [`useToggle`](./docs/useToggle.md) &mdash; manages boolean state with a built-in toggle function
  - [`useUpdateEffect`](./docs/useUpdateEffect.md) &mdash; acts like useEffect but skips execution on the initial render

<br />
<br />
<br />
<br />
<br />
<br />
<br />
