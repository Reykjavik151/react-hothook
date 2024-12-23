import React, { SetStateAction } from 'react';
/**
 * Extends React.useState with a validator function (second parameter) that validates the state and returns a boolean as a third value of the output array.
 * @param initialValue initial value of the state
 * @param validator function-validator that validates the state after each state update
 * @returns [state, setState, isValid] - state is the current state, setState is the setter for the state, isValid is a boolean that indicates if the state passes the validation
 */
export declare const useStateWithValidation: <T>(initialValue: T, validator: (value: T) => boolean) => [T, React.Dispatch<React.SetStateAction<T>>, boolean];
