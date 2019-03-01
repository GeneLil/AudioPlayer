import { Track } from "./tracks"

export class Audio {
  public playList: Track[] = []
  public currentTrackIndex: number = 0

  addTrackToList(audioTrack: Track) {
    this.playList.push(audioTrack)
    audioTrack.audioElement.src = audioTrack.src
    audioTrack.audioElement.preload = "metadata"
    audioTrack.audioElement.addEventListener("loadedmetadata", () => {
      audioTrack.trackDuration = audioTrack.audioElement.duration
    })
  }
  play() {
    this.playList[this.currentTrackIndex].audioElement.play()
  }
  pause() {
    this.playList[this.currentTrackIndex].audioElement.pause()
  }
  stop() {
    this.playList[this.currentTrackIndex].audioElement.pause()
    this.playList[this.currentTrackIndex].audioElement.currentTime = 0.0
  }
  playNextTrack() {
    this.stop()
    this.currentTrackIndex++
    this.play()
  }
  playPreviousTrack() {
    this.stop()
    this.currentTrackIndex--
    this.play()
  }
  get isNextTrackAvailable() {
    return this.playList[this.currentTrackIndex + 1]
  }
  get isPrevTrackAvailable() {
    return this.playList[this.currentTrackIndex - 1]
  }
  get duration() {
    return this.playList[this.currentTrackIndex].trackDuration!
  }
  get isPaused() {
    return this.playList[this.currentTrackIndex].audioElement.paused
  }
  get artistName() {
    return this.playList[this.currentTrackIndex].artistName
  }
  get songName() {
    return this.playList[this.currentTrackIndex].songName
  }
  get songId() {
    return this.playList[this.currentTrackIndex].id
  }
  setVolume(volumeLevel: number) {
    this.playList[this.currentTrackIndex].audioElement.volume =
      volumeLevel / 100
  }
}
