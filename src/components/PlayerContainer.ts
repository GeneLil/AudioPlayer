import { Component } from "./Component"
import { Controls } from "./Controls"
import { Audio } from "./Audio"
import { ProgressBar } from "./ProgressBar"

export class PlayerContainer extends Component {
  private progressBar: ProgressBar
  private controls: Controls
  constructor(audio: Audio) {
    super()
    this.progressBar = new ProgressBar(audio, this.element)
    this.controls = new Controls(audio, this.element, this.progressBar)
    this.addClass("player-container")
  }
}
