declare type UseCountdownOptions = {
    initialRemainingTimeMs: number;
    onEnd?: () => void;
    onTick?: (timeLeft: number) => void;
    countdownStepMs?: number;
};
/**
 * Hook to manage a countdown timer
 *
 * @param options initialRemainingTimeMs: number; onEnd?: () => void; onTick?: (timeLeft: number) => void; countdownStepMs?: number;
 * @returns set of functions and values to manage a countdown, including pause, resume, reset, and setting a new time
 *
 * @example
 * const {
 *   timeLeft,
 *   isPaused,
 *   resetCountdown,
 *   pauseCountdown,
 *   resumeCountdown,
 *   setNewRemainingTime,
 * } = useCountdown({
 *   initialRemainingTimeMs: 60000,
 *   countdownStepMs: 400,
 *   onTick: (currentTimeLeft) => { console.log('Countdown tick:', currentTimeLeft); },
 *   onEnd: () => { console.log('Countdown ended!'); },
 * });
 */
export declare const useCountdown: ({ initialRemainingTimeMs, onEnd, onTick, countdownStepMs }: UseCountdownOptions) => {
    isPaused: boolean;
    timeLeft: number;
    setNewRemainingTime: (newTimeMs: number) => void;
    resetCountdown: () => void;
    pauseCountdown: () => void;
    resumeCountdown: () => void;
};
export {};
