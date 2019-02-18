import { Component } from "./Component"

export class Controls extends Component {
  constructor() {
    super()
    this.addClass("controls")
    this.render()
  }
  render() {
    this.element.innerHTML = `
      <div class="control-button" id="play-pause"></div>
      <div class="control-button" id="prev"></div>
      <div class="control-button" id="next"></div>
    `
  }
}
