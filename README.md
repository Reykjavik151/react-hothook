# react-hothook

> Outstanding set of the powerful typed hooks

[![NPM](https://img.shields.io/npm/v/react-hothook.svg)](https://www.npmjs.com/package/react-hothook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The version for react native with an additional functionallity: [react-native-hookbox](https://github.com/Reykjavik151/react-native-hookbox)

## Install

NPM:

```bash
npm install --save react-hothook
```

Yarn:

```bash
yarn add react-hothook
```

## Usage

### useAsync

Async wrapper for async/await functions with Promise return.

```ts
// file1 (API or something)
const someAsyncFn = async () => 'async data';

// file2 (Component)
import { useAsync } from 'react-hothook';

// ...

const { data, error, isLoading } = useAsync(someAsyncFn);

useEffect(() => {
  console.log('new data:', data);
}, [data]);

useEffect(() => {
  console.log('error:', error);
}, [error]);

// usage of 'isLoading' if you need
```

### useCached

Returns the cached non-empty value of the current value.
Do not consider any `null`, `undefined` and `NaN` values (or similar).

```ts
import { useCached } from 'react-hothook';

// ...

const [state, setState] = useState(0);
const cachedState = useCached(state);

// state: 0, cachedState: 0
// state: 1, cachedState: 1,
// state: 2, cachedState: 2,
// state: undefined, cachedState: 2,
// state: null, cachedState 2,
// state: 10, cachedState: 10,
// state: 11, cachedState: 11,
// ...
```

### useCountdown

Makes the countdown with some interval (step). Calls `onEnd` function if it exists at the end.
Provides `timeLeft`, `isPaused` fields and `setNewRemainingTime`, `resetCountdown`, `pauseCountdown`, `resumeCountdown` methods for countdown manipulation.

```ts
import { useCountdown } from 'react-hothook';

// ...

// The coundown will be updated each 500ms. 60000 -> 59500 -> 59000 -> 58500 -> ... -> 500 -> 0
// The `onTick` console.log will output 'tick 59500' -> 'tick 59000' -> 'tick 58500' ... -> 'tick 500'
// The console.log will output 'finish' when the `timeLeft` will be equal to 0.
const { timeLeft, isPaused, setNewRemainingTime, resetCountdown, pauseCountdown, resumeCountdown } = useCountdown({
  initialRemainingTimeMs: 60000,
  onTick: (currentTimeLeft: number) => console.log('tick', currentTimeLeft),
  onEnd: () => console.log('finish'),
  countdownStepMs: 500
});

// timeLeft will be equal 60000 after this call.
const onSetNewRemainingTime = () => {
  setNewRemainingTime(60000);
};

// `resetCountdown` will reset `timeLeft` to 0 and pause the timer.

// `pauseCountdown` will pause the countdown and provide the updated value with `isPaused`

// `resumeCountdown` will resume the countdown and provide the updated value with `isPaused`
```

### useDebouncedValue

A bit delayed value of the state.
If the state changes, the timer is reset.

```ts
import { useDebouncedValue } from 'react-hothook';

// ...

const [state, setState] = useState(0);
const debouncedState = useDebouncedValue(state, 1000);

// ...
```

### useDeepCompareEffect

useEffect with deep comparison of dependencies instead of shalow comparison by the default.

```ts
import { useDeepCompareEffect } from 'react-hothook';

// ...

const [state, setState] = useState({ name: 'John' });

// ...

useDeepCompareEffect(() => {
  console.log('state has been updated (even if not a link for object)');
}, [state]);

// ...

// The same link for object, but another properties inside
setState((prev) => {
  prev.name = 'Roman';
  return prev;
});

// It will trigger the deepCompareEffect above
```

### useFetch

Fetch data from an API

```ts
import { useFetch } from 'react-hothook';

// ...

const MyComponent = () => {
  const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/todos/1', {});

  // ...
};
```

### useMount

useEffect with an empty dependency array.

```ts
import { useMount } from 'react-hothook';

// ...

useMount(() => {
  console.log('component has been mounted');
});
```

### usePrevious

Returns the previous value in the previous render iteration.

```ts
import { usePrevious } from 'react-hothook';

// ...

const [state, setState] = useState(0);
const prevState = usePrevious(state);

// state: 0, prevState: undefined
// state: 1, prevState: 0,
// state: 2, prevState: 1,
// state: 0, prevState: 2,
// ...
```

### useSpecificKeyExtractor

```tsx
import { useSpecificKeyExtractor } from 'react-hothook';

// ...

// 'some-data-element' is a just prefix for a convenient debugging when you check nodes in React DevTools
// 'id' should be included in 'SomeDataType'
const keyExtractor = useSpecificKeyExtractor<SomeDataType>('some-data-element', 'id');

return <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />;

// ...
```

### useStateWithCached

Combines useState and useCached hooks.

```ts
import { useStateWithCached } from 'react-hothook';

// ...

const [state, setState, cachedState] = useStateWithCached(0);

// state: 0, cachedState: 0
// state: 1, cachedState: 1,
// state: 2, cachedState: 2,
// state: null, cachedState: 2,
// state: 4, cachedState: 4,
// state: undefined, cachedState: 4,
// state: 6, cachedState: 6,
// state: 7, cachedState: 7,
```

### useStateWithPrevious

Combines useState and usePrevious hooks.

```ts
import { useStateWithPrevious } from 'react-hothook';

// ...

const [state, setState, prevState] = useStateWithPrevious(0);

// state: 0, prevState: undefined
// state: 1, prevState: 0,
// state: 2, prevState: 1,
// state: 0, prevState: 2,
```

### useStateWithValidation

Validate the state value when it updates and return the boolean value of passed / failed validation as third param of the output array.

```ts
export { useStateWithValidation } from 'react-hothook';

// ...

const [state, setState, isValid] = useStateWithValidation(0, (value) => value > 0);

// state: 0, isValid: false
// setState(1)
// state: 1, isValid: true,
// setState(-1)
// state: -1, isValid: false,
// setState(10)
// state: 10, isValid: true,
```

### useToggle

Extended useState for boolean values.
Return `[value, toggleValue]` array.

```ts
import { useToggle } from 'react-hothook';

// ...

const [value, toggleValue] = useToggle(false);

// ...
const onPress = () => {
  toggleValue();
};

// onPress() -> value: true
// onPress() -> value: false
// onPress() -> value: true
// ...
```

### useUpdateEffect

useEffect that does not run on the first render.

```ts
import { useUpdateEffect } from 'react-hothook';

// ...

const [counter, setCounter] = useState(0);

// only after new value appears
// shouldn't be called with counter === 0
useUpdateEffect(() => {
  console.log('counter has been updated');
}, [counter]);

// setCounter(1) -> 'counter has been updated' in the console
```

## License

MIT © [Reykjavik151](https://github.com/Reykjavik151)
