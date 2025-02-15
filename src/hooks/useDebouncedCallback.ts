import { useCallback, useRef } from 'react';

/**
 * Returns a debounced callback function that delays the execution of the provided callback
 * until after the specified delay has passed since the last invocation.
 *
 * @param callback The function to debounce
 * @param dependencies Dependencies that trigger recreation of the debounced function
 * @param delay Delay in milliseconds before executing the callback
 * @returns A debounced version of the callback
 */
export const useDebouncedCallback = <TArgs extends any[]>(
  callback: (...args: TArgs) => void,
  dependencies: any[],
  delay: number
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: TArgs) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback.apply(null, args);
      }, delay);
    },
    [...dependencies, delay] // Recreate function when dependencies or delay change
  );
};
