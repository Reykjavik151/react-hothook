/**
 * Saves the previous state of the value
 * @param value the current value from the useState (usually) to save its prev value
 * @param valuesToIgnore an array of values to ignore when saving the previous value
 * @returns the previous saved value
 */
export declare const usePrevious: <T>(value: T, valuesToIgnore?: T[]) => T | undefined;
