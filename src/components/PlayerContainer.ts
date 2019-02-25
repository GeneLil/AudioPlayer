import { Component } from "./Component"
import { Controls } from "./Controls"
import { Audio } from "./Audio"
import { ProgressBar } from "./ProgressBar"

export class PlayerContainer extends Component {
  private audio: Audio
  private progressBar: ProgressBar
  private controls: Controls
  constructor(audio: Audio) {
    super()
    this.audio = audio
    this.progressBar = new ProgressBar(this.audio, this.element)
    this.controls = new Controls(
      this.audio,
      this.element,
      this.onPlay.bind(this),
      this.onPause.bind(this)
    )
    this.addClass("player-container")
    this.render()
  }
  onPlay() {
    this.progressBar.startProgress()
  }
  onPause() {
    this.progressBar.endProgress()
  }
  render() {}
}
