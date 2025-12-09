import { useEffect, useState, useRef } from "react";
import RecordIcon from "../assets/record.svg";
import Muted from "../assets/muted.svg";
import On from "../assets/on.svg";
import mp3 from "../assets/10.mp3";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);
  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
      console.log(audioRef.current.muted);
      console.log(audioRef.current);
    }
  };
  useEffect(() => {
    const handleUserInteraction = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.play().catch((e) => console.log("Play failed:", e));
      }
    };

    document.addEventListener("click", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <div className="rounded-full shadow-xl w-64 sm:w-80 md:w-96 absolute top-4 py-4 px-4 text-center text-xl flex gap-5 justify-between items-end">
      {/* <span> */}
      <img src={RecordIcon} height={36} width={36} className="animate-spin" />
      {/* </span> */}
      <div className="text-black h-9 flex flex-col justify-center text-sm sm:text-md capitalize font-semibold ">
        <p>now playing: brown noise</p>
        <audio src={mp3} ref={audioRef} autoPlay muted={muted} loop />
      </div>
      <img
        src={muted ? Muted : On}
        height={36}
        width={36}
        onClick={handleMute}
      />
    </div>
  );
};

export default Player;
