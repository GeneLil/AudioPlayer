export class Component {
  public element = document.createElement("div")
  public addClass = (className: string) => {
    this.element.classList.add(className)
  }
}
