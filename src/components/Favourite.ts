import { Component } from "./Component"

export class Favourite extends Component {
  constructor() {
    super()
    this.addClass("favourite-container")
    this.render()
  }
  render() {
    this.element.innerHTML = `
      <div class="favourite-message">Favourited</div>
      <div class="favourite-heart"></div>
    `
  }
}
