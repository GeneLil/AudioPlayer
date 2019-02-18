import { Container } from "./components/Container"
import "./styles/index.css"

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main")
  const container = new Container()
  container.addClass("container")

  if (main) {
    main.appendChild(container.element)
  }
})
