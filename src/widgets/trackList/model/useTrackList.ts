import { useState } from "react";
import { TTrack } from "@/entities";

export const useTrackList = (tracks: TTrack[]) => {
  const [trackList, setTrackList] = useState<TTrack[]>(tracks);

  const onDragFinish = ({ from, to }: { from: number; to: number }) => {
    const _list = [...trackList];
    _list.splice(from, 1);
    _list.splice(to, 0, trackList[from]);
    setTrackList(_list);
  };

  return { trackList, onDragFinish };
};
