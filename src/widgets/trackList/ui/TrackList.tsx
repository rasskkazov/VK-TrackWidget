import { useState } from "react";
import { Cell, List } from "@vkontakte/vkui";

import { TTrack, playerStorage } from "@/entities";
import { TrackPLayer } from "@/widgets/track/ui/TrackPlayer";
import { useTrackList } from "../model/useTrackList";
import { observer } from "mobx-react";

export const TrackList = observer((props: { tracks: TTrack[] }) => {
  const { trackList, onDragFinish } = useTrackList(props.tracks);

  return (
    <List>
      {trackList.map((track) => (
        <Cell key={track.id} draggable onDragFinish={onDragFinish}>
          <TrackPLayer trackPLayerOptions={track} />
        </Cell>
      ))}
    </List>
  );
});
