import { Component } from "./Component"
import { ProgressBar } from "./ProgressBar"
import { Controls } from "./Controls"

export class PlayerContainer extends Component {
  constructor() {
    super()
    this.addClass("player-container")
    this.render()
  }
  render() {
    const progressBar = new ProgressBar()
    const controls = new Controls()
    this.element.appendChild(progressBar.canvas)
    this.element.appendChild(controls.element)
  }
}
