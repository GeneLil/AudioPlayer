import { Component } from "./Component"
import { Favourite } from "./Favourite"
import { PlayerContainer } from "./PlayerContainer"
import { Volume } from "./Volume"
import { Audio } from "./Audio"
import { audioTracks } from "./tracks"

export class Container extends Component {
  constructor() {
    super()
    this.render()
  }
  render() {
    const audio = new Audio()
    audioTracks.map(audioTrack => {
      audio.addTrackToList(audioTrack)
    })

    const favourite = new Favourite(audio)
    const playerContainer = new PlayerContainer(audio, favourite)
    const volume = new Volume(audio)

    this.element.appendChild(favourite.element)
    this.element.appendChild(playerContainer.element)
    this.element.appendChild(volume.element)
  }
}
