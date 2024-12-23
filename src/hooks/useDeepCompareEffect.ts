import { isEqual } from 'lodash';
// eslint-disable-next-line no-unused-vars
import { DependencyList, useEffect, useRef } from 'react';

type EffectCallback = () => void;

/**
 * Allows a component to run an effect only when the dependencies have changed using a deep comparison instead of a shallow comparison
 * @param callback function that must be called when the deps change
 * @param dependencies deep comparison dependencies that will be used to trigger the callback
 */
export const useDeepCompareEffect = (callback: EffectCallback, dependencies: DependencyList): void => {
  const currentDependenciesRef = useRef<DependencyList | null>(null);

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
};
