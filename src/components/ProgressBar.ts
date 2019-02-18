import { Component } from "./Component"

export class ProgressBar extends Component {
  public canvas = document.createElement("canvas") as HTMLCanvasElement

  private context = this.canvas.getContext("2d")
  private amountLoaded: number = 0
  private startFrom: number = 4.72
  private canvasWidth: number = 125
  private canvasHeight: number = 125
  private diff: number = 0

  private timer: any

  constructor() {
    super()
    this.canvas.width = 260
    this.canvas.height = 260
    if (this.canvas) {
      this.startProgress()
    }
  }

  startProgress() {
    this.timer = setInterval(this.progress.bind(this), 50)
  }

  endProgress() {
    clearInterval(this.timer)
  }

  progress() {
    const { context } = this
    this.diff = (this.amountLoaded / 100) * Math.PI * 2
    if (context) {
      context.clearRect(0, 0, 260, 260)
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
      context.stroke()
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
