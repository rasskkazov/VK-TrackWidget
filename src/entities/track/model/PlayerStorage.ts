import { makeAutoObservable } from "mobx";

class PlayerStorage {
  private player: HTMLAudioElement = null;
  activeTrackId: number = null;

  constructor() {
    makeAutoObservable(this);
  }

  pauseTrack() {
    if (this.player) this.player.pause();
  }

  playTrack() {
    if (this.player) this.player.play();
  }

  setActiveTrack(newActiveTrackId: number) {
    this.activeTrackId = newActiveTrackId;
  }

  setPlayer(newPlayer: HTMLAudioElement) {
    if (this.player) this.pauseTrack();
    this.player = newPlayer;
    this.player.load();
  }
}

export const playerStorage = new PlayerStorage();
