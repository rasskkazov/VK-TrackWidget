import { TrackOptions, Track } from "@/entities";
import { ChooseTrackOptions } from "@/features";

type TrackPlayerOptions = Omit<TrackOptions, "playBtn">;

export const TrackPLayer = (props: {
  trackPLayerOptions: TrackPlayerOptions;
}) => {
  return (
    <Track
      id={props.trackPLayerOptions.id}
      artist={props.trackPLayerOptions.artist}
      songName={props.trackPLayerOptions.songName}
      song={props.trackPLayerOptions.song}
      cover={props.trackPLayerOptions.cover}
      moreBtn={<ChooseTrackOptions />}
    />
  );
};
