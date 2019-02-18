import { Component } from "./Component"
import { Favourite } from "./Favourite"
import { PlayerContainer } from "./PlayerContainer"
import { Volume } from "./Volume"

export class Container extends Component {
  constructor() {
    super()
    this.render()
  }
  render() {
    const favourite = new Favourite()
    const playerContainer = new PlayerContainer()
    const volume = new Volume()

    this.element.appendChild(favourite.element)
    this.element.appendChild(playerContainer.element)
    this.element.appendChild(volume.element)
  }
}
