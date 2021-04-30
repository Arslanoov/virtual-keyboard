import { addStyles } from "../helpers/styles"

import {
  KeyboardButtonStyle,
  KeyboardLayoutButtonInterface
} from "../types"

class Button {
  private config: KeyboardLayoutButtonInterface
  private style: KeyboardButtonStyle
  private element: HTMLElement | null

  constructor(config: KeyboardLayoutButtonInterface, style: KeyboardButtonStyle) {
    this.config = config
    this.style = style
    this.element = null
  }

  public get code(): string {
    return this.config.code
  }

  public get content(): string {
    return this.config.content
  }

  public get isBackspace(): boolean {
    return this.config.isBackspace ?? false
  }

  public render(): HTMLElement {
    const buttonElement = document.createElement("div")
    buttonElement.classList.add("a-virtual-keyboard__button")
    buttonElement.innerText = this.config.content

    addStyles(buttonElement, {
      gridColumn: `${this.config.columnPosition} / span ${this.config.columnSize}`,
      gridRow: `${this.config.rowPosition} / span ${this.config.rowSize}`,
      justifySelf: "center",
      alignSelf: "center",
      background: this.style.background,
      borderRadius: this.style.borderRadius
    })

    this.element = buttonElement

    return buttonElement
  }

  public press(): void {
    if (!this.element) {
      throw new Error("Button is not rendered")
    }

    addStyles(this.element, {
      background: "blue"
    })

    window.setTimeout(() => addStyles(this.element as HTMLElement, {
      background: this.style.background
    }), 150)
  }
}

export default Button
