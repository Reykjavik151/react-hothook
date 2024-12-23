/**
 * Saves only not empty, not undefined and not null values
 * @param value any value to save
 * @returns the previous saved non-empty value
 */
export declare const useCached: <T>(value: T) => T | undefined;
