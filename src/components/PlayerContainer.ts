import { Component } from "./Component"
import { Controls } from "./Controls"
import { Audio } from "./Audio"
import { ProgressBar } from "./ProgressBar"
import { Favourite } from "./Favourite"

export class PlayerContainer extends Component {
  private progressBar: ProgressBar
  private controls: Controls
  constructor(audio: Audio, favourite: Favourite) {
    super()
    this.progressBar = new ProgressBar(audio, this.element)
    this.controls = new Controls(
      audio,
      favourite,
      this.progressBar,
      this.element
    )
    this.addClass("player-container")
  }
}
