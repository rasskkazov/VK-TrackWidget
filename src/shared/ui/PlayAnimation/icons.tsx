import * as classes from "./PlayAnimation.module.scss";

export const paused = (
  <svg
    className={classes.musicPLay}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 18C3.16421 18 3.5 17.6642 3.5 17.25C3.5 16.8358 3.16421 16.5 2.75 16.5C2.33579 16.5 2 16.8358 2 17.25C2 17.6642 2.33579 18 2.75 18Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 18C6.66421 18 7 17.6642 7 17.25C7 16.8358 6.66421 16.5 6.25 16.5C5.83579 16.5 5.5 16.8358 5.5 17.25C5.5 17.6642 5.83579 18 6.25 18Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18C10.4142 18 10.75 17.6642 10.75 17.25C10.75 16.8358 10.4142 16.5 10 16.5C9.58579 16.5 9.25 16.8358 9.25 17.25C9.25 17.6642 9.58579 18 10 18Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.75 18C13.3358 18 13 17.6642 13 17.25C13 16.8358 13.3358 16.5001 13.75 16.5001C14.1642 16.5001 14.5 16.8359 14.5 17.2501C14.5 17.6643 14.1642 18 13.75 18Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 18C16.8358 18 16.5 17.6642 16.5 17.25C16.5 16.8358 16.8358 16.5 17.25 16.5C17.6642 16.5 18 16.8358 18 17.25C18 17.6642 17.6642 18 17.25 18Z"
    />
  </svg>
);
export const playing = (
  <svg
    className={`${classes.musicPLay_running} ${classes.musicPLay}`}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={`${classes.musicPLay__line1} ${classes.musicPLay__line}`}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 18.0001C3.16421 18.0001 3.5 17.6643 3.5 17.2501V5.25012C3.5 4.83591 3.16421 4.50012 2.75 4.50012C2.33579 4.50012 2 4.83591 2 5.25012V17.2501C2 17.6643 2.33579 18.0001 2.75 18.0001Z"
    />
    <path
      className={`${classes.musicPLay__line2} ${classes.musicPLay__line}`}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 18.0001C6.66421 18.0001 7 17.6643 7 17.2501V8.25012C7 7.83591 6.66421 7.50012 6.25 7.50012C5.83579 7.50012 5.5 7.83591 5.5 8.25012V17.2501C5.5 17.6643 5.83579 18.0001 6.25 18.0001Z"
    />
    <path
      className={`${classes.musicPLay__line3} ${classes.musicPLay__line}`}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18.0001C10.4142 18.0001 10.75 17.6643 10.75 17.2501V14.2501C10.75 13.8359 10.4142 13.5001 10 13.5001C9.58579 13.5001 9.25 13.8359 9.25 14.2501V17.2501C9.25 17.6643 9.58579 18.0001 10 18.0001Z"
    />
    <path
      className={`${classes.musicPLay__line4} ${classes.musicPLay__line}`}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.75 18.0001C13.3358 18.0001 13 17.6643 13 17.2501L13 3.74805C13 3.33383 13.3358 2.99805 13.75 2.99805C14.1642 2.99805 14.5 3.33383 14.5 3.74805L14.5 17.2501C14.5 17.6643 14.1642 18.0001 13.75 18.0001Z"
    />
    <path
      className={`${classes.musicPLay__line5} ${classes.musicPLay__line}`}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.25 18.0001C16.8358 18.0001 16.5 17.6643 16.5 17.2501V11.7501C16.5 11.3359 16.8358 11.0001 17.25 11.0001C17.6642 11.0001 18 11.3359 18 11.7501V17.2501C18 17.6643 17.6642 18.0001 17.25 18.0001Z"
    />
  </svg>
);
