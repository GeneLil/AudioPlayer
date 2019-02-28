import { Component } from "./Component"
import { Audio } from "./Audio"

export class ProgressBar extends Component {
  public canvas = document.createElement("canvas") as HTMLCanvasElement
  private context = this.canvas.getContext("2d")
  private amountLoaded: number = 0
  private startFrom: number = 4.72
  private canvasWidth: number = 125
  private canvasHeight: number = 125
  private diff: number = 0

  private timer: any

  constructor(private audio: Audio, rootElem: HTMLDivElement) {
    super()
    this.audio = audio
    this.canvas.width = 260
    this.canvas.height = 260
    rootElem.appendChild(this.canvas)
    this.drawBackground()
  }

  drawBackground() {
    const { context } = this
    if (context) {
      context.beginPath()
      context.arc(
        this.canvasWidth,
        this.canvasHeight,
        120,
        0,
        2 * Math.PI,
        false
      )
      context.strokeStyle = "#000"
      context.lineWidth = 10
      context.stroke()
    }
  }

  startProgress() {
    this.timer = setInterval(
      this.progress.bind(this),
      (this.audio.duration / 100) * 1000
    )
  }

  endProgress() {
    clearInterval(this.timer)
  }

  resetProgress() {
    const { context } = this
    if (context) {
      context.clearRect(0, 0, 260, 260)
      this.drawBackground()
    }
    this.amountLoaded = 0
    this.endProgress()
    this.startProgress()
  }

  progress() {
    const { context } = this
    this.diff = (this.amountLoaded / 100) * Math.PI * 2
    if (context) {
      context.clearRect(0, 0, 260, 260)
      this.drawBackground()
      context.strokeStyle = "rgb(0, 120, 200)"
      context.lineWidth = 10
      context.beginPath()
      context.arc(
        this.canvasWidth,
        this.canvasHeight,
        120,
        this.startFrom,
        this.diff + this.startFrom,
        false
      )
      context.stroke()

      if (this.amountLoaded > 100) {
        this.endProgress()
      }
      this.amountLoaded++
    }
  }
}
