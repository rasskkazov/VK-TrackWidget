import { useState, useRef, useEffect } from "react";
import { playerStorage } from "./PlayerStorage";

import { formatTime } from "@/shared/lib/formatTime";
import * as classes from "../ui/Track.module.scss";

const interactives = [
  `.${classes.track__song}`,
  `.${classes.track__artist}`,
  `.${classes.track__tools}`,
];

export const useTrack = (trackId: number) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurTime] = useState<string>(null);
  const [duration, setDuration] = useState<string>(null);
  const playerRef = useRef<HTMLAudioElement>();
  const isActive = playerStorage.activeTrackId === trackId;

  const pauseTrack = () => {
    playerStorage.pauseTrack();
    setIsPlaying(false);
  };
  const playTrack = () => {
    setTimeout(() => {
      playerStorage.playTrack();
      setIsPlaying(true);
    }, 0);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetElement = e.target as Element;

    const clickOnInteractive = interactives.some((preventElement) =>
      targetElement.closest(preventElement)
    );
    if (clickOnInteractive) return;

    playerRef.current.focus();
    if (!isActive) {
      playerStorage.setPlayer(playerRef.current);
      playerStorage.setActiveTrack(trackId);
      playTrack();
    } else {
      if (isPlaying) pauseTrack();
      else playTrack();
    }
  };

  useEffect(() => {
    const player = playerRef.current;

    if (player) {
      const updateDuration = () => setDuration(formatTime(player.duration));
      const updateCurTime = () => setCurTime(formatTime(player.currentTime));

      player.addEventListener("timeupdate", updateCurTime);
      player.addEventListener("loadedmetadata", updateDuration);
      player.addEventListener("play", playTrack);
      player.addEventListener("pause", pauseTrack);
      player.volume = 0.15;

      return () => {
        player.removeEventListener("timeupdate", updateCurTime);
        player.removeEventListener("loadedmetadata", updateDuration);
        player.removeEventListener("play", playTrack);
        player.removeEventListener("pause", pauseTrack);
      };
    }
  }, [playerRef]);

  return {
    isPlaying,
    isActive,
    handleCardClick,
    currentTime,
    duration,
    playerRef,
  };
};
