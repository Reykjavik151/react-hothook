/**
 * Extended useState for boolean value with exported toggle function
 * @param defaultValue boolean value to set as default
 * @returns [isValue, toggleValue] - isValue is the current boolean value, toggleValue is the toggle setter for the boolean value without any params
 */
export declare const useToggle: (defaultValue: boolean) => [boolean, () => void];
