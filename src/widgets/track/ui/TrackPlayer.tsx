import { Icon16MoreVertical } from "@vkontakte/icons";

import { TrackOptions, Track } from "@/entities";
import * as classes from "./TrackPlayer.module.scss";
type TrackPlayerOptions = Omit<TrackOptions, "playBtn">;

export const TrackPLayer = (props: {
  trackPLayerOptions: TrackPlayerOptions;
}) => {
  const moreBtn = (
    <button onClick={onMore} className={classes.moreBtn}>
      <Icon16MoreVertical />
    </button>
  );

  function onMore() {
    alert("Действия пользователя с треком");
  }

  return (
    <Track
      artist={props.trackPLayerOptions.artist}
      songName={props.trackPLayerOptions.songName}
      song={props.trackPLayerOptions.song}
      moreBtn={moreBtn}
    />
  );
};
