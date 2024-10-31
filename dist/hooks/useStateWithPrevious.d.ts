import React, { SetStateAction } from 'react';
/**
 * Extends React.useState with a previous state as a first output value of array
 * @param initialValue initial value as the third value of the state and prevState
 * @returns [state, setState, prevState] - state is the current state, setState is the setter for the state, prevState is the previous state,
 */
export declare const useStateWithPrevious: <T>(initialValue: T) => [T, React.Dispatch<React.SetStateAction<T>>, T | undefined];
