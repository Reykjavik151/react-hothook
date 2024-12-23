/**
 * Hook to fetch data from an API
 * @param url fetch url
 * @param options fetch options
 * @returns Promise with the response body
 */
export declare const useFetch: (url: string, options?: RequestInit) => {
    data: any;
    error: Error | null;
    loading: boolean;
};
