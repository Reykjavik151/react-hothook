import { DependencyList } from 'react';
declare type EffectCallback = () => void;
/**
 * Allows a component to run an effect only when the dependencies have changed using a deep comparison instead of a shallow comparison
 * @param callback function that must be called when the deps change
 * @param dependencies deep comparison dependencies that will be used to trigger the callback
 */
export declare const useDeepCompareEffect: (callback: EffectCallback, dependencies: DependencyList) => void;
export {};
