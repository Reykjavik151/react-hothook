/**
 * Returns a debounced callback function that delays the execution of the provided callback
 * until after the specified delay has passed since the last invocation.
 *
 * @param callback The function to debounce
 * @param dependencies Dependencies that trigger recreation of the debounced function
 * @param delay Delay in milliseconds before executing the callback
 * @returns A debounced version of the callback
 */
export declare const useDebouncedCallback: <TArgs extends any[]>(callback: (...args: TArgs) => void, dependencies: any[], delay: number) => (...args: TArgs) => void;
