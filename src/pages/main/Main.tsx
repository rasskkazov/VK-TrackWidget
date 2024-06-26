import { TrackList } from "@/widgets";
import { TTrack } from "@/entities";
import song3 from "@/shared/assets/music/Arash - Temptation.mp3";
import song1 from "@/shared/assets/music/Eurythmics - Sweet Dreams.mp3";
import song2 from "@/shared/assets/music/Britney Spears - Baby One More Time.mp3";
import cover2 from "@/shared/assets/img/cover1.jpg";
import * as classes from "./Main.module.scss";

const tracks: TTrack[] = [
  {
    id: 1,
    songName: "Sweet Dreams",
    artist: "Eurythmics",
    song: song1,
  },
  {
    id: 2,
    songName: "Baby One More Time...",
    artist: "Britney Spears",
    song: song2,
    cover: cover2,
  },
  {
    id: 3,
    songName: "Это оригинал!!!",
    artist: "Arash",
    song: song3,
  },
];

export const Main = () => {
  return (
    <div className={classes.container}>
      <TrackList tracks={tracks} />
    </div>
  );
};
