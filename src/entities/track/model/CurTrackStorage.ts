import { makeAutoObservable } from "mobx";

class CurTrackStorage {
  private activeTrack: HTMLAudioElement;
  activeTrackId: number;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveTrack(newActiveTrack: HTMLAudioElement, newActiveTrackId: number) {
    if (this.activeTrack) this.activeTrack.pause();
    this.activeTrack = newActiveTrack;
    this.activeTrackId = newActiveTrackId;
    this.activeTrack.play();
  }
}

export const curTrackStorage = new CurTrackStorage();
