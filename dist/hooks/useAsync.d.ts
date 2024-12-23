/**
 * Async wrapper for async/await functions with Promise return
 * @param asyncFn should return promise
 * @returns data - expected value of "asyncFn", error - something went wrong (unexpected), loading - is asyncFn running
 */
export declare const useAsync: <TExpectedData>(asyncFn: () => Promise<TExpectedData>) => {
    data: TExpectedData | null;
    error: Error | null;
    loading: boolean;
};
