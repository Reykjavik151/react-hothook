# useCountdown

**Hook to manage a countdown timer with customizable behavior and lifecycle events.**

This hook provides an easy-to-use API to create and control a countdown timer. It offers features like pausing, resuming, resetting, and updating the timer while providing callbacks for custom logic during the countdown.

## Parameters

- `initialRemainingTimeMs` (number): The initial countdown time in milliseconds.
- `onEnd` (optional, `() => void`): Callback triggered when the countdown ends.
- `onTick` (optional, `(timeLeft: number) => void`): Callback triggered on every tick with the current time left.
- `countdownStepMs` (optional, number, default: 1000): Interval (in milliseconds) between countdown updates.

## Return Values

- `timeLeft` (number): The current remaining time in milliseconds.
- `isPaused` (boolean): Indicates whether the countdown is currently paused.
- `pauseCountdown` (`() => void`): Pauses the countdown.
- `resumeCountdown` (`() => void`): Resumes the countdown.
- `resetCountdown` (`() => void`): Stops the countdown and resets the remaining time to 0.
- `setNewRemainingTime` (`(newTimeMs: number) => void`): Updates the remaining time to a new value.

## Example Usage

```tsx
import React from 'react';
import { useCountdown } from 'react-hothook';

const CountdownComponent = () => {
  const { timeLeft, isPaused, resetCountdown, pauseCountdown, resumeCountdown, setNewRemainingTime } = useCountdown({
    initialRemainingTimeMs: 60000, // 1 minute
    countdownStepMs: 1000,
    onTick: (currentTimeLeft) => console.log('Time left:', currentTimeLeft),
    onEnd: () => console.log('Countdown completed!')
  });

  return (
    <div>
      <p>Time Left: {timeLeft} ms</p>
      <button onClick={pauseCountdown} disabled={isPaused}>
        Pause
      </button>
      <button onClick={resumeCountdown} disabled={!isPaused}>
        Resume
      </button>
      <button onClick={resetCountdown}>Reset</button>
      <button onClick={() => setNewRemainingTime(30000)}>Set to 30 seconds</button>
    </div>
  );
};
```
