/**
 * Get value after a delay. If value changes within the delay period, the timeout gets cleared and restarted.
 * @param value current value to debounce
 * @param delay time to wait before updating the debounced value
 * @returns debounced value
 */
export declare const useDebouncedValue: <TValue>(value: TValue, delay: number) => TValue;
