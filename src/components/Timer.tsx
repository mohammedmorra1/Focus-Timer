import React, { useState, useEffect, useMemo } from "react";

const Timer = () => {
  const [timer, setTimer] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(3590);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [Sid, setSid] = useState<number>();
  const startTimer = () => {
    setTimer(true);
  };
  useEffect(() => {
    if (timer) {
      const id: number = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      console.log("timer started with id: ", id);
      setSid(id);
    }
  }, [timer]);
  const stopTimer = () => {
    setTimer(false);
    clearInterval(Sid);
  };
  const resetTimer = () => {
    setSeconds(0);
  };
  useMemo(() => setMinutes(Math.floor(seconds / 60)), [seconds]);
  useMemo(() => setHours(Math.floor(seconds / 3600)), [seconds]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        {hours}:{minutes % 60}:{seconds % 60}
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
