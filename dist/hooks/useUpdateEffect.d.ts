/// <reference types="react" />
/**
 * Extended useEffect - skip first function call on mount and leave only update calls
 * @param callback function that must be called when the deps change and skip first time as main purpose
 * @param deps dependencies that will be used to trigger the callback
 */
export declare const useUpdateEffect: (callback: () => void, deps: import("react").DependencyList) => void;
