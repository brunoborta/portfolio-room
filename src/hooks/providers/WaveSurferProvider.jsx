import { createContext, useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export const WaveSurferContext = createContext({
  waveformRef: null,
  isPlaying: false,
  currentTime: "0:00",
  duration: "0:00",
  handlePlayPause: () => {},
});

export const WaveSurferProvider = ({ children }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    const initWaveSurfer = () => {
      try {
        // Initialize WaveSurfer
        wavesurferRef.current = WaveSurfer.create({
          container: waveformRef.current,
          waveColor: "#b69fc0",
          progressColor: "#010101",
          //   cursorColor: "#4353ff",
          height: 60,
          responsive: true,
          barWidth: 3,
          barGap: 2,
          dragToSeek: true,
          hideScrollbar: true,
          url: "/media/song.mp3",
        });

        wavesurferRef.current.on("ready", () => {
          const duration = wavesurferRef.current.getDuration();
          setDuration(formatTime(duration));
        });

        wavesurferRef.current.on("audioprocess", () => {
          const currentTime = wavesurferRef.current.getCurrentTime();
          setCurrentTime(formatTime(currentTime));
        });

        // Loop
        wavesurferRef.current.on("finish", () => {
          wavesurferRef.current.play();
        });
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    initWaveSurfer();

    // Clean up on unmount
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePlayPause = () => {
    wavesurferRef.current.playPause();
    setIsPlaying(!isPlaying);
  };

  return (
    <WaveSurferContext.Provider
      value={{
        waveformRef,
        isPlaying,
        currentTime,
        duration,
        handlePlayPause,
      }}
    >
      {children}
    </WaveSurferContext.Provider>
  );
};
