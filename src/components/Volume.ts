import { Component } from "./Component"

export class Volume extends Component {
  private volume: number
  constructor() {
    super()
    this.volume = 40
    this.addClass("volume-container")
    this.render()
    const volumeSlider = this.element.querySelector("#volume-slider")
    if (volumeSlider) {
      volumeSlider.setAttribute("value", this.volume.toString())
      volumeSlider.addEventListener("input", this.onVolumeChange.bind(this))
    }
  }

  onVolumeChange(e: any) {
    this.volume = e.target.value
    this.setMessageText()
  }

  setMessageText() {
    const volumeMessage = this.element.querySelector(".volume-message")
    if (volumeMessage) {
      volumeMessage.textContent = `${this.volume}%`
    }
  }

  render() {
    this.element.innerHTML = `
      <div>
        <div class="volume-message">${this.volume}%</div>
        <div class="volume-icon"></div>
      </div>
      <input value="0" min="0" max="100" step="1" id="volume-slider" type="range" />
    `
  }
}
