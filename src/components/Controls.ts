import { Component } from "./Component"
import { Audio } from "./Audio"

export class Controls extends Component {
  private audio: Audio
  onPlay: () => void
  onPause: () => void
  constructor(
    audio: Audio,
    rootElement: HTMLDivElement,
    onPlay: () => void,
    onPause: () => void
  ) {
    super()
    this.audio = audio
    this.onPause = onPause
    this.onPlay = onPlay
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
  }
  playPause(e: any) {
    const playBtn = e.target
    if (!this.audio.isPaused()) {
      this.audio.pause()
      playBtn.classList.add("play")
      playBtn.classList.remove("pause")
      this.onPause()
    } else {
      this.audio.play()
      playBtn.classList.add("pause")
      playBtn.classList.remove("play")
      this.onPlay()
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
