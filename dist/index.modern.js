import { useState, useEffect, useRef, useCallback } from 'react';
import { isEmpty, isUndefined, isNull, isEqual } from 'lodash';

const useAsync = asyncFn => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setData(null);
    setError(null);
    setIsLoading(false);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await asyncFn();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [asyncFn]);
  return {
    data,
    error,
    loading: isLoading
  };
};

const useCached = value => {
  const ref = useRef();
  useEffect(() => {
    if (!(isEmpty(value) || isUndefined(value) || isNull(value))) {
      ref.current = value;
    }
  }, [value]);
  return ref.current;
};

const useCountdown = ({
  initialRemainingTimeMs,
  onEnd,
  onTick,
  countdownStepMs: _countdownStepMs = 1000
}) => {
  const [timeLeft, setTimeLeft] = useState(initialRemainingTimeMs);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const startTimer = useCallback(() => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= _countdownStepMs) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            onEnd === null || onEnd === void 0 ? void 0 : onEnd();
            return 0;
          }
          const newTime = prev - _countdownStepMs;
          onTick === null || onTick === void 0 ? void 0 : onTick(newTime);
          return newTime;
        });
      }, _countdownStepMs);
    }
  }, [_countdownStepMs, onEnd, onTick]);
  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  useEffect(() => {
    if (timeLeft > 0 && !isPaused && !timerRef.current) {
      startTimer();
    }
    return () => {
      stopTimer();
    };
  }, [timeLeft, isPaused, startTimer, stopTimer]);
  const pauseCountdown = useCallback(() => {
    setIsPaused(true);
    stopTimer();
  }, [stopTimer]);
  const resumeCountdown = useCallback(() => {
    setIsPaused(false);
    startTimer();
  }, [startTimer]);
  const setNewRemainingTime = useCallback(newTimeMs => {
    setTimeLeft(newTimeMs);
  }, []);
  const resetCountdown = useCallback(() => {
    setTimeLeft(0);
    pauseCountdown();
  }, [pauseCountdown]);
  return {
    isPaused,
    timeLeft,
    setNewRemainingTime,
    resetCountdown,
    pauseCountdown,
    resumeCountdown
  };
};

const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

const useDeepCompareEffect = (callback, dependencies) => {
  const currentDependenciesRef = useRef(null);
  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }
  useEffect(callback, [currentDependenciesRef.current]);
};

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};
const useFetch = (url, options = {}) => useAsync(() => fetch(url, {
  ...options,
  headers: {
    ...DEFAULT_HEADERS,
    ...(options.headers ?? {})
  }
}).then(res => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then(json => {
    throw new Error(json);
  });
}));

const useMount = func => useEffect(func, []);

const usePrevious = (value, valuesToIgnore = []) => {
  const ref = useRef();
  useEffect(() => {
    if (valuesToIgnore.includes(value)) return;
    ref.current = value;
  }, [value, valuesToIgnore]);
  return ref.current;
};

const useSpecificKeyExtractor = (prefix, field) => useCallback((item, index) => `${prefix}-${item[field]}-${index}`, [prefix, field]);

const useStateWithCached = initialValue => {
  const [state, setState] = useState(initialValue);
  const cachedState = useCached(state);
  return [state, setState, cachedState];
};

const useStateWithPrevious = initialValue => {
  const [state, setState] = useState(initialValue);
  const prevState = usePrevious(state);
  return [state, setState, prevState];
};

const useUpdateEffect = (callback, deps) => {
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, deps);
};

const useStateWithValidation = (initialValue, validator) => {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(validator(state));
  useUpdateEffect(() => {
    setIsValid(validator(state));
  }, [state, validator]);
  return [state, setState, isValid];
};

const useToggle = defaultValue => {
  const [isValue, setIsValue] = useState(defaultValue);
  const toggleValue = useCallback(() => setIsValue(prevState => !prevState), []);
  return [isValue, toggleValue];
};

export { useAsync, useCached, useCountdown, useDebouncedValue, useDeepCompareEffect, useFetch, useMount, usePrevious, useSpecificKeyExtractor, useStateWithCached, useStateWithPrevious, useStateWithValidation, useToggle, useUpdateEffect };
//# sourceMappingURL=index.modern.js.map
