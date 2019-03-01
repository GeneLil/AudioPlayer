import { Component } from "./Component"
import { Audio } from "./Audio"

export class Favourite extends Component {
  private favouritesList: string[] = []
  constructor(private audio: Audio) {
    super()
    this.addClass("favourite-container")
    this.render()
    this.addEventListeners()
    this.setFavouriteStatus()
  }

  addEventListeners() {
    const heartIcon = this.element.querySelector(".favourite-heart")
    if (heartIcon) {
      heartIcon.addEventListener("click", this.onHeartClick.bind(this))
    }
  }

  onHeartClick() {
    if (!this.isFavourite(this.audio)) {
      this.addToFavorite(this.audio)
      return
    }
  }

  addToFavorite(audio: Audio) {
    this.favouritesList.push(audio.songId.toString())
    localStorage.setItem("tracksIds", JSON.stringify(this.favouritesList))
    this.setFavouriteStatus()
  }

  isFavourite(audio: Audio) {
    const tracksIdsString = localStorage.getItem("tracksIds")
    if (tracksIdsString) {
      const storedIds = JSON.parse(tracksIdsString)
      return storedIds.includes(audio.songId.toString())
    }
    return null
  }

  fillHeartIcon() {
    const heartIcon = this.element.querySelector(".favourite-heart")
    if (heartIcon) {
      heartIcon.classList.add("filled")
    }
  }

  emptyHeartIcon() {
    const heartIcon = this.element.querySelector(".favourite-heart")
    if (heartIcon) {
      heartIcon.classList.remove("filled")
    }
  }

  setFavouriteStatus() {
    if (this.isFavourite(this.audio)) {
      this.fillHeartIcon()
      this.setFavouriteMessage("Favourited")
    } else {
      this.emptyHeartIcon()
      this.setFavouriteMessage("Add to favourite")
    }
  }

  setFavouriteMessage(message: string) {
    const label = this.element.querySelector(".favourite-message")
    if (label) {
      label.textContent = message
    }
  }

  render() {
    this.element.innerHTML = `
      <div class="favourite-message">Favourite</div>
      <div class="favourite-heart"></div>
    `
  }
}
