import { KeyboardConfig } from "../types"
import { addStyles } from "../helpers/styles"

import Button from "./Button"

class Keyboard {
  private config: KeyboardConfig
  private renderedButtons: Button[]
  private readonly rendered: HTMLElement

  constructor(config: KeyboardConfig) {
    this.config = config
    this.rendered = document.createElement("div")
    this.renderedButtons = []
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

  public mount(selector: string): void {
    const element: HTMLElement | null = document.querySelector(selector)
    if (element) {
      element.appendChild(this.rendered)
    }
  }

  public destroy(): void {
    document.removeEventListener("keypress", this.onButtonPress)
    this.rendered.remove()
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

  private onButtonAction(code: string, e?: KeyboardEvent): void {
    const button = this.renderedButtons.find(button => button.code === code)
    if (button) {
      e?.preventDefault()
      button.press()
      this.config.layout.onButtonClick(button.code, button.content, button.isBackspace, button.isTab)
    }
  }

  private renderButtons(): void {
    this.config.layout.buttons.forEach(config => {
      const button = new Button(config, this.config.layout.style.button)
      const renderedButton = button.render()
      if (!this.config.listenMode) {
        renderedButton.addEventListener("click", () => this.onButtonAction(button.code))
      }
      this.renderedButtons.push(button)
      this.rendered.appendChild(renderedButton)
    })

    document.addEventListener("keydown", e => this.onButtonAction(e.code, e))
  }
}

export default Keyboard
