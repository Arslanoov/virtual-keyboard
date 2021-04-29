import {
  KeyboardConfig
} from "../types"

import {
  addClasses
} from "../helpers/classes"

class Keyboard {
  private config: KeyboardConfig
  private readonly rendered: HTMLElement

  constructor(config: KeyboardConfig) {
    this.config = config
    this.rendered = document.createElement("div")
    this.init()
    this.renderLayout()
  }

  public init(): void {
    this.rendered.classList.add("a-virtual-keyboard")
    addClasses(this.rendered, {
      width: this.config.width,
      height: this.config.height
    })
  }

  private renderLayout(): void {
    addClasses(this.rendered, {
      display: "grid"
    })
  }

  public mount(selector: string): void {
    const element: HTMLElement | null = document.querySelector(selector)
    if (element) {
      element.appendChild(this.rendered)
    }
  }
}

export default Keyboard
