import { useState, useEffect, useRef, useCallback } from 'react';
import { isEmpty, isUndefined, isNull, isEqual } from 'lodash';

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

// Asynchronously await a promise and pass the result to a finally continuation
function _finallyRethrows(body, finalizer) {
	try {
		var result = body();
	} catch (e) {
		return finalizer(true, e);
	}
	if (result && result.then) {
		return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
	}
	return finalizer(false, result);
}

var useAsync = function useAsync(asyncFn) {
  var _useState = useState(null),
    data = _useState[0],
    setData = _useState[1];
  var _useState2 = useState(null),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = useState(false),
    isLoading = _useState3[0],
    setIsLoading = _useState3[1];
  useEffect(function () {
    setData(null);
    setError(null);
    setIsLoading(false);
    var fetchData = function fetchData() {
      try {
        setIsLoading(true);
        var _temp = _finallyRethrows(function () {
          return _catch(function () {
            return Promise.resolve(asyncFn()).then(function (result) {
              setData(result);
            });
          }, function (err) {
            setError(err);
          });
        }, function (_wasThrown, _result) {
          setIsLoading(false);
          if (_wasThrown) throw _result;
          return _result;
        });
        return Promise.resolve(_temp && _temp.then ? _temp.then(function () {}) : void 0);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    fetchData();
  }, [asyncFn]);
  return {
    data: data,
    error: error,
    loading: isLoading
  };
};

var useCached = function useCached(value) {
  var ref = useRef();
  useEffect(function () {
    if (!(isEmpty(value) || isUndefined(value) || isNull(value))) {
      ref.current = value;
    }
  }, [value]);
  return ref.current;
};

var useCountdown = function useCountdown(_ref) {
  var initialRemainingTimeMs = _ref.initialRemainingTimeMs,
    onEnd = _ref.onEnd,
    onTick = _ref.onTick,
    _ref$countdownStepMs = _ref.countdownStepMs,
    countdownStepMs = _ref$countdownStepMs === void 0 ? 1000 : _ref$countdownStepMs;
  var _useState = useState(initialRemainingTimeMs),
    timeLeft = _useState[0],
    setTimeLeft = _useState[1];
  var _useState2 = useState(false),
    isPaused = _useState2[0],
    setIsPaused = _useState2[1];
  var timerRef = useRef(null);
  var startTimer = useCallback(function () {
    if (!timerRef.current) {
      timerRef.current = setInterval(function () {
        setTimeLeft(function (prev) {
          if (prev <= countdownStepMs) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            onEnd === null || onEnd === void 0 ? void 0 : onEnd();
            return 0;
          }
          var newTime = prev - countdownStepMs;
          onTick === null || onTick === void 0 ? void 0 : onTick(newTime);
          return newTime;
        });
      }, countdownStepMs);
    }
  }, [countdownStepMs, onEnd, onTick]);
  var stopTimer = useCallback(function () {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  useEffect(function () {
    if (timeLeft > 0 && !isPaused && !timerRef.current) {
      startTimer();
    }
    return function () {
      stopTimer();
    };
  }, [timeLeft, isPaused, startTimer, stopTimer]);
  var pauseCountdown = useCallback(function () {
    setIsPaused(true);
    stopTimer();
  }, [stopTimer]);
  var resumeCountdown = useCallback(function () {
    setIsPaused(false);
    startTimer();
  }, [startTimer]);
  var setNewRemainingTime = useCallback(function (newTimeMs) {
    setTimeLeft(newTimeMs);
  }, []);
  var resetCountdown = useCallback(function () {
    setTimeLeft(0);
    pauseCountdown();
  }, [pauseCountdown]);
  return {
    isPaused: isPaused,
    timeLeft: timeLeft,
    setNewRemainingTime: setNewRemainingTime,
    resetCountdown: resetCountdown,
    pauseCountdown: pauseCountdown,
    resumeCountdown: resumeCountdown
  };
};

var useDebouncedValue = function useDebouncedValue(value, delay) {
  var _useState = useState(value),
    debouncedValue = _useState[0],
    setDebouncedValue = _useState[1];
  useEffect(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

var useDeepCompareEffect = function useDeepCompareEffect(callback, dependencies) {
  var currentDependenciesRef = useRef(null);
  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }
  useEffect(callback, [currentDependenciesRef.current]);
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

var DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};
var useFetch = function useFetch(url, options) {
  if (options === void 0) {
    options = {};
  }
  return useAsync(function () {
    var _options$headers;
    return fetch(url, _extends({}, options, {
      headers: _extends({}, DEFAULT_HEADERS, (_options$headers = options.headers) != null ? _options$headers : {})
    })).then(function (res) {
      if (res.ok) {
        return res.json();
      }
      return res.json().then(function (json) {
        throw new Error(json);
      });
    });
  });
};

var useMount = function useMount(func) {
  return useEffect(func, []);
};

var usePrevious = function usePrevious(value, valuesToIgnore) {
  if (valuesToIgnore === void 0) {
    valuesToIgnore = [];
  }
  var ref = useRef();
  useEffect(function () {
    if (valuesToIgnore.includes(value)) return;
    ref.current = value;
  }, [value, valuesToIgnore]);
  return ref.current;
};

var useSpecificKeyExtractor = function useSpecificKeyExtractor(prefix, field) {
  return useCallback(function (item, index) {
    return prefix + "-" + item[field] + "-" + index;
  }, [prefix, field]);
};

var useStateWithCached = function useStateWithCached(initialValue) {
  var _useState = useState(initialValue),
    state = _useState[0],
    setState = _useState[1];
  var cachedState = useCached(state);
  return [state, setState, cachedState];
};

var useStateWithPrevious = function useStateWithPrevious(initialValue) {
  var _useState = useState(initialValue),
    state = _useState[0],
    setState = _useState[1];
  var prevState = usePrevious(state);
  return [state, setState, prevState];
};

var useUpdateEffect = function useUpdateEffect(callback, deps) {
  var firstRenderRef = useRef(true);
  useEffect(function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, deps);
};

var useStateWithValidation = function useStateWithValidation(initialValue, validator) {
  var _useState = useState(initialValue),
    state = _useState[0],
    setState = _useState[1];
  var _useState2 = useState(validator(state)),
    isValid = _useState2[0],
    setIsValid = _useState2[1];
  useUpdateEffect(function () {
    setIsValid(validator(state));
  }, [state, validator]);
  return [state, setState, isValid];
};

var useToggle = function useToggle(defaultValue) {
  var _useState = useState(defaultValue),
    isValue = _useState[0],
    setIsValue = _useState[1];
  var toggleValue = useCallback(function () {
    return setIsValue(function (prevState) {
      return !prevState;
    });
  }, []);
  return [isValue, toggleValue];
};

export { useAsync, useCached, useCountdown, useDebouncedValue, useDeepCompareEffect, useFetch, useMount, usePrevious, useSpecificKeyExtractor, useStateWithCached, useStateWithPrevious, useStateWithValidation, useToggle, useUpdateEffect };
//# sourceMappingURL=index.modern.js.map
