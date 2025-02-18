import { useCallback, useState } from 'react';

/**
 * Extended useState for boolean value with exported toggle function
 * @param defaultValue boolean value to set as default
 * @returns [isValue, toggleValue] - isValue is the current boolean value, toggleValue is the toggle setter for the boolean value without any params
 */
export const useToggle = (defaultValue: boolean): [boolean, () => void] => {
  const [isValue, setIsValue] = useState(defaultValue);

  const toggleValue = useCallback(() => setIsValue((prevState) => !prevState), []);

  return [isValue, toggleValue];
};
