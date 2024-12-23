import React, { SetStateAction } from 'react';
/**
 * Extends React.useState with a cached non-empty state as a third output value of array
 * @param initialValue initial value as the third value of the state and prevState
 * @returns [state, setState, cachedState] - state is the current state (including undefined and null), setState is the setter for the state, cachedState is the latest non-empty state
 */
export declare const useStateWithCached: <T>(initialValue: T) => [T, React.Dispatch<React.SetStateAction<T>>, T | undefined];
