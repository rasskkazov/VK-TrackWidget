import { useState } from "react";
import { Cell, List } from "@vkontakte/vkui";

import { TTrack } from "@/entities";
import { TrackPLayer } from "@/widgets/track/ui/TrackPlayer";

export const TrackList = (props: { tracks: TTrack[] }) => {
  const [trackList, setTrackList] = useState<TTrack[]>(props.tracks);

  const onDragFinish = ({ from, to }: { from: number; to: number }) => {
    const _list = [...trackList];
    _list.splice(from, 1);
    _list.splice(to, 0, trackList[from]);
    setTrackList(_list);
  };

  return (
    <List>
      {trackList.map((track) => (
        <Cell key={track.id} draggable onDragFinish={onDragFinish}>
          <TrackPLayer trackPLayerOptions={track} />
        </Cell>
      ))}
    </List>
  );
};
