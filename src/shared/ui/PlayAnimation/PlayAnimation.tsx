import { paused, playing } from "./icons";

export const PlayAnimation = (props: { isRunning: boolean }) => {
  const musicPlay = props.isRunning ? playing : paused;
  return musicPlay;
};
