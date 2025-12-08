import React, { useState, useEffect, useCallback } from "react";

const Timer = () => {
  const [timer, setTimer] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(3590);
  // const [minutes, setMinutes] = useState<number>(0);
  // const [hours, setHours] = useState<number>(0);
  const [Sid, setSid] = useState<number>();
  useEffect(() => {
    if (timer) {
      const id: number = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      console.log("timer started with id: ", id);
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
  }, []);
  const displaySeconds = seconds % 60;
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(seconds / 3600);
  // useMemo(() => setMinutes(Math.floor(seconds / 60)), [seconds]);
  // useMemo(() => setHours(Math.floor(seconds / 3600)), [seconds]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(displaySeconds).padStart(2, "0")}
      </div>
      <div className="flex flex-col w-fit items-center justify-center">
        <button className="border w-full" onClick={startTimer}>
          Start
        </button>
        <button className="border w-full" onClick={resetTimer}>
          Reset
        </button>
        <button className="border w-full" onClick={stopTimer}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Timer;
