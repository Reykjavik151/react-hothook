/**
 * Creates a key extractor function for React mapping that uses a specific field of the item as a key
 * @param prefix prefix for the key
 * @param field field of the item to use as a key
 * @returns key extractor function for React mapping
 */
export declare const useSpecificKeyExtractor: <TItem>(prefix: string, field: keyof TItem) => (item: TItem, index: number) => string;
