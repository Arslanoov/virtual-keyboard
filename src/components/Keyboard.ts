import { KeyboardConfig } from "../types"
import { addStyles } from "../helpers/styles"

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
      gridTemplateColumns: `repeat(${this.config.layout.columnsCount}, 1fr)`,
      gridTemplateRows: `repeat(${this.config.layout.rowsCount}, 1fr)`,
      rowGap: this.config.layout.rowGap,
      columnGap: this.config.layout.columnGap
    })
  }
  
  private renderButtons(): void {
    this.config.layout.buttons.forEach(button => {
      const buttonElement = document.createElement("div")
      buttonElement.classList.add("a-virtual-keyboard__button")
      buttonElement.innerText = button.content
      addStyles(buttonElement, {
        width: this.config.layout.style.button.width,
        height: this.config.layout.style.button.height,
        borderRadius: this.config.layout.style.button.borderRadius
      })
      this.rendered.appendChild(buttonElement)
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
