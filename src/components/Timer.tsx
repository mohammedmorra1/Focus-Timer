import { useState, useEffect, useCallback } from "react";

// Timer state interface for storage
interface TimerState {
  seconds: number;
  isRunning: boolean;
  lastUpdated: number;
}

// Storage constants
const TIMER_STORAGE_KEY = "focusTimerState";
const EXPIRATION_HOURS = 24;

// Storage utility functions
const saveTimerState = (seconds: number, isRunning: boolean) => {
  try {
    const state: TimerState = {
      seconds,
      isRunning,
      lastUpdated: Date.now(),
    };
    localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Error saving timer state:", error);
  }
};

const loadTimerState = (): { seconds: number; isRunning: boolean } => {
  try {
    const stored = localStorage.getItem(TIMER_STORAGE_KEY);
    if (!stored) return { seconds: 0, isRunning: false };

    const state = JSON.parse(stored) as TimerState;

    // Check if data is valid
    if (
      typeof state.seconds !== "number" ||
      typeof state.isRunning !== "boolean" ||
      typeof state.lastUpdated !== "number"
    ) {
      localStorage.removeItem(TIMER_STORAGE_KEY);
      return { seconds: 0, isRunning: false };
    }

    // Check if expired (24 hours)
    const now = Date.now();
    const expirationTime = EXPIRATION_HOURS * 60 * 60 * 1000; // 24 hours in milliseconds
    if (now - state.lastUpdated > expirationTime) {
      localStorage.removeItem(TIMER_STORAGE_KEY);
      return { seconds: 0, isRunning: false };
    }

    return { seconds: state.seconds, isRunning: state.isRunning };
  } catch (error) {
    console.error("Error loading timer state:", error);
    localStorage.removeItem(TIMER_STORAGE_KEY);
    return { seconds: 0, isRunning: false };
  }
};

const Timer = () => {
  // Load initial state from localStorage
  const initialState = loadTimerState();
  const [timer, setTimer] = useState<boolean>(initialState.isRunning);
  const [seconds, setSeconds] = useState<number>(initialState.seconds);
  const [Sid, setSid] = useState<number>();

  // Save state to localStorage whenever seconds or timer state changes
  useEffect(() => {
    saveTimerState(seconds, timer);
  }, [seconds, timer]);

  useEffect(() => {
    if (timer) {
      const id: number = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      setSid(id);
    }
    return () => {
      clearInterval(Sid);
    };
  }, [timer]);
  const startTimer = useCallback(() => {
    setTimer(true);
  }, []);

  const stopTimer = useCallback(() => {
    setTimer(false);
    clearInterval(Sid);
  }, [Sid]);

  const resetTimer = useCallback(() => {
    setSeconds(0);
    // for some reason calling stopTimer() here doesn't work so i duplicated the code
    setTimer(false);
    clearInterval(Sid);
    // Clear stored state when user manually resets
    try {
      localStorage.removeItem(TIMER_STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing timer state:", error);
    }
  }, [Sid]);
  const displaySeconds = seconds % 60;
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(seconds / 3600);
  // useMemo(() => setMinutes(Math.floor(seconds / 60)), [seconds]);
  // useMemo(() => setHours(Math.floor(seconds / 3600)), [seconds]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="md:text-9xl text-7xl timer">
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(displaySeconds).padStart(2, "0")}
      </div>
      <div className="flex items-center justify-around w-full">
        <button className="controlBtn" onClick={startTimer}>
          Start
        </button>
        <button className="controlBtn" onClick={resetTimer}>
          Reset
        </button>
        <button className="controlBtn" onClick={stopTimer}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
