import { Icon16MoreVertical } from "@vkontakte/icons";

import * as classes from "./chooseTrackOptions.module.scss";

export const ChooseTrackOptions = () => {
  const onMore = () => {
    alert("Действия пользователя с треком");
  };

  return (
    <button onClick={onMore} className={classes.moreBtn}>
      <Icon16MoreVertical />
    </button>
  );
};
