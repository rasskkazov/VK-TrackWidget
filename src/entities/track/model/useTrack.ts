import { useState, useRef, useEffect } from "react";

import { formatTime } from "@/shared/lib/formatTime";
import * as classes from "../ui/Track.module.scss";

export const useTrack = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>(null);
  const [duration, setDuration] = useState<string>(null);

  const playerRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    const player = playerRef.current;

    if (player) {
      const updateDuration = () => {
        setDuration(formatTime(player.duration));
      };
      const updateCurrentTime = () =>
        setCurrentTime(formatTime(player.currentTime));

      player.addEventListener("timeupdate", updateCurrentTime);
      player.addEventListener("loadedmetadata", updateDuration);

      return () => {
        player.removeEventListener("timeupdate", updateCurrentTime);
        player.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, [playerRef]);

  const togglePlay = () => {
    if (isPlaying) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
      setIsActive(true);
    }

    setIsPlaying(!isPlaying);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetElement = e.target as Element;
    const preventPlayElements = [
      `.${classes.track__song}`,
      `.${classes.track__artist}`,
      `.${classes.track__tools}`,
    ];

    if (
      preventPlayElements.some((preventElement) =>
        targetElement.closest(preventElement)
      )
    ) {
      return;
    }
    togglePlay();
  };

  return {
    isPlaying,
    isActive,
    handleCardClick,
    currentTime,
    duration,
    playerRef,
  };
};
