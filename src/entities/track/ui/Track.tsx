import { ReactNode } from "react";
import { observer } from "mobx-react";
import { useTrack } from "../model/useTrack";
import { TTrack } from "../model/types";
import { Footnote, Headline } from "@vkontakte/vkui";

import { PlayAnimation } from "@/shared/ui/PlayAnimation/PlayAnimation";
import Dummy from "@/shared/assets/img/dummy.png";
import * as classes from "./Track.module.scss";

export type TrackOptions = TTrack & {
  moreBtn?: ReactNode;
};

export const Track = observer((props: TrackOptions) => {
  const {
    isPlaying,
    isActive,
    handleCardClick,
    currentTime,
    duration,
    playerRef,
  } = useTrack(props.id);

  return (
    <div className={classes.track} onClick={handleCardClick}>
      <div className={classes.track__coverContainer}>
        <button className={classes.track__cover}>
          <img src={props.cover ?? Dummy} alt="song-cover" />
          {isActive && (
            <>
              <div className={classes.track__overlay}></div>
              <div className={classes.track__playAnimation}>
                <PlayAnimation isRunning={isPlaying} />
              </div>
            </>
          )}
        </button>
      </div>

      <div className={classes.track__info}>
        <Headline weight="1" className={classes.track__song}>
          {props.songName}
        </Headline>
        <Footnote className={classes.track__artist}>{props.artist}</Footnote>
      </div>

      <div className={classes.track__tools}>
        <Footnote className={classes.track__time}>
          {!isPlaying && !isActive && duration}
          {isPlaying && currentTime}
          {!isPlaying && isActive && currentTime}
        </Footnote>
        <div className={classes.track__more}>{props.moreBtn}</div>
      </div>

      <audio controls ref={playerRef}>
        <source src={props.song} type="audio/mpeg" />
      </audio>
    </div>
  );
});
