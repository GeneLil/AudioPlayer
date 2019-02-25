export class Audio {
  private newTrack: HTMLAudioElement = document.createElement("audio")
  public playList: HTMLAudioElement[] = []
  private trackDuration: number = 0

  constructor(audioPath: string) {
    this.newTrack.src = audioPath
    this.newTrack.preload = "metadata"
    this.newTrack.addEventListener(
      "loadedmetadata",
      this.initializeTrack.bind(this)
    )
    this.playList.push(this.newTrack)
  }
  initializeTrack() {
    this.trackDuration = this.playList[0].duration
  }
  isPaused() {
    return this.playList[0].paused
  }
  play() {
    this.playList[0].play()
  }
  pause() {
    this.playList[0].pause()
  }
  get duration() {
    return this.trackDuration
  }
  setVolume(volumeLevel: number) {
    this.playList[0].volume = volumeLevel / 100
  }
}
