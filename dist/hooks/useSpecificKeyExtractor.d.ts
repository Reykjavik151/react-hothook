/**
 * Creates a key extractor function for the FlatList
 * @param prefix prefix for the key
 * @param field field of the item to use as a key
 * @returns key extractor function for the FlatList
 */
export declare const useSpecificKeyExtractor: <TItem>(prefix: string, field: keyof TItem) => (item: TItem, index: number) => string;
