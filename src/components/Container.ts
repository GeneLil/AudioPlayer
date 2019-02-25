import { Component } from "./Component"
import { Favourite } from "./Favourite"
import { PlayerContainer } from "./PlayerContainer"
import { Volume } from "./Volume"
import { Audio } from "./Audio"

export class Container extends Component {
  constructor() {
    super()
    this.render()
  }
  render() {
    const audio = new Audio(
      "https://cdn.jsdelivr.net/gh/lexytail/first-phaser/assets/music.mp3"
    )
    const favourite = new Favourite()
    const playerContainer = new PlayerContainer(audio)
    const volume = new Volume(audio)

    this.element.appendChild(favourite.element)
    this.element.appendChild(playerContainer.element)
    this.element.appendChild(volume.element)
  }
}
