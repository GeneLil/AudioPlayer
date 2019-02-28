export class Audio {
  public playList: HTMLAudioElement[] = []
  private trackDuration: number = 0
  public currentTrackIndex: number = 0

  constructor() {}

  addTrackToList(source: string) {
    const newTrack: HTMLAudioElement = document.createElement("audio")
    newTrack.src = source
    this.playList.push(newTrack)
    newTrack.preload = "metadata"
    newTrack.addEventListener("loadedmetadata", this.initializeTrack.bind(this))
  }
  initializeTrack() {
    this.trackDuration = this.playList[this.currentTrackIndex].duration
  }
  play() {
    this.playList[this.currentTrackIndex].play()
  }
  pause() {
    this.playList[this.currentTrackIndex].pause()
  }
  stop() {
    this.playList[this.currentTrackIndex].pause()
    this.playList[this.currentTrackIndex].currentTime = 0.0
  }
  playNextTrack() {
    if (this.playList[this.currentTrackIndex + 1]) {
      this.stop()
      this.currentTrackIndex++
      this.play()
    } else {
      console.log("No more songs in the list")
    }
  }
  playPreviousTrack() {
    if (this.playList[this.currentTrackIndex - 1]) {
      this.stop()
      this.currentTrackIndex--
      this.play()
    } else {
      console.log("No more songs in the list")
    }
  }
  get duration() {
    return this.playList[this.currentTrackIndex].duration
  }
  get isPaused() {
    return this.playList[this.currentTrackIndex].paused
  }
  setVolume(volumeLevel: number) {
    this.playList[this.currentTrackIndex].volume = volumeLevel / 100
  }
}
