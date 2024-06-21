import { TrackPLayer } from "@/widgets";
import { PlayAnimation } from "@/shared/ui/PlayAnimation/PlayAnimation";
import song from "@/shared/assets/music/Britney Spears - Baby One More Time.mp3";
import * as classes from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={classes.container}>
      <TrackPLayer
        trackPLayerOptions={{
          songName: "Трек",
          artist: "Исполнитель",
          song,
        }}
      />
    </div>
  );
};
