import { useState, useRef, useEffect } from "react";

import { formatTime } from "@/shared/lib/formatTime";
import * as classes from "../ui/Track.module.scss";
import { curTrackStorage } from "./CurTrackStorage";

export const useTrack = (trackId: number) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(
    curTrackStorage.activeTrackId === trackId ? true : false
  );
  const [currentTime, setCurTime] = useState<string>(null);
  const [duration, setDuration] = useState<string>(null);

  const playerRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    const player = playerRef.current;

    if (player) {
      const updateDuration = () => setDuration(formatTime(player.duration));
      const updateCurTime = () => setCurTime(formatTime(player.currentTime));
      const onPause = () => setIsPlaying(false);
      const onPlay = () => setIsPlaying(true);

      player.addEventListener("timeupdate", updateCurTime);
      player.addEventListener("loadedmetadata", updateDuration);
      player.addEventListener("pause", onPause);
      player.addEventListener("play", onPlay);

      return () => {
        player.removeEventListener("timeupdate", updateCurTime);
        player.removeEventListener("loadedmetadata", updateDuration);
        player.removeEventListener("pause", onPause);
        player.removeEventListener("play", onPlay);
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

    const interactives = [
      `.${classes.track__song}`,
      `.${classes.track__artist}`,
      `.${classes.track__tools}`,
    ];
    const clickOnInteractive = interactives.some((preventElement) =>
      targetElement.closest(preventElement)
    );
    if (clickOnInteractive) return;

    playerRef.current.focus();
    curTrackStorage.setActiveTrack(playerRef.current, trackId);
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
