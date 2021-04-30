import { KeyboardConfig } from "../types"
import { addStyles } from "../helpers/styles"

import Button from "./Button"

class Keyboard {
  private config: KeyboardConfig
  private readonly rendered: HTMLElement

  constructor(config: KeyboardConfig) {
    this.config = config
    this.rendered = document.createElement("div")
    this.init()
  }

  public init(): void {
    this.rendered.classList.add("a-virtual-keyboard")
    addStyles(this.rendered, {
      width: this.config.width,
      height: this.config.height
    })

    this.renderLayout()
    this.renderButtons()
  }

  private renderLayout(): void {
    addStyles(this.rendered, {
      display: "grid",
      gridTemplateColumns:
        `repeat(${this.config.layout.columnsCount}, minmax(${this.config.layout.style.button.minWidth}, 1fr))`,
      gridTemplateRows:
        `repeat(${this.config.layout.rowsCount}, minmax(${this.config.layout.style.button.minHeight}, 1fr))`,
      rowGap: this.config.layout.rowGap,
      columnGap: this.config.layout.columnGap,
      padding: this.config.layout.style.padding,
      background: this.config.layout.style.background,
      borderTop: this.config.layout.style.borderTop,
      borderBottom: this.config.layout.style.borderBottom,
      borderLeft: this.config.layout.style.borderLeft,
      borderRight: this.config.layout.style.borderRight,
      border: this.config.layout.style.border
    })
  }

  private renderButtons(): void {
    this.config.layout.buttons.forEach(config => {
      const button = new Button(config, this.config.layout.style.button)
      this.rendered.appendChild(button.render())
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
