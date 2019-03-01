import { Component } from "./Component"
import { Audio } from "./Audio"
import { ProgressBar } from "./ProgressBar"
import { Favourite } from "./Favourite"

export class Controls extends Component {
  constructor(
    private audio: Audio,
    private favourite: Favourite,
    private progressBar: ProgressBar,
    rootElement: HTMLDivElement
  ) {
    super()
    this.audio = audio
    this.progressBar = progressBar
    this.addClass("controls")
    this.render()
    rootElement.appendChild(this.element)
    this.addEventListeners()
  }
  addEventListeners() {
    const playBtn = this.element.querySelector("#play-pause")
    if (playBtn) {
      playBtn.addEventListener("click", this.playPause.bind(this))
    }
    const playNextBtn = this.element.querySelector("#next")
    if (playNextBtn) {
      playNextBtn.addEventListener("click", this.playNextTrack.bind(this))
    }
    const playPrevBtn = this.element.querySelector("#prev")
    if (playPrevBtn) {
      playPrevBtn.addEventListener("click", this.playPreviousTrack.bind(this))
    }
  }
  playPause(e: any) {
    const playBtn = e.target
    if (!this.audio.isPaused) {
      this.audio.pause()
      playBtn.classList.add("play")
      playBtn.classList.remove("pause")
      this.progressBar.endProgress()
    } else {
      this.audio.play()
      playBtn.classList.add("pause")
      playBtn.classList.remove("play")
      this.progressBar.startProgress()
    }
  }
  playNextTrack() {
    if (this.audio.isNextTrackAvailable) {
      this.audio.playNextTrack()
      this.progressBar.resetProgress()
      this.favourite.setFavouriteStatus()
    } else {
      console.log("No more songs in the list")
    }
  }
  playPreviousTrack() {
    if (this.audio.isPrevTrackAvailable) {
      this.audio.playPreviousTrack()
      this.progressBar.resetProgress()
      this.favourite.setFavouriteStatus()
    } else {
      console.log("No more songs in the list")
    }
  }
  render() {
    this.element.innerHTML = `
      <div class="control-button play" id="play-pause"></div>
      <div class="control-button" id="prev"></div>
      <div class="control-button" id="next"></div>
    `
  }
}
