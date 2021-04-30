import { addStyles } from "../helpers/styles"

import {
  KeyboardButtonStyle,
  KeyboardLayoutButtonInterface
} from "../types"

class Button {
  public config: KeyboardLayoutButtonInterface
  public style: KeyboardButtonStyle

  constructor(config: KeyboardLayoutButtonInterface, style: KeyboardButtonStyle) {
    this.config = config
    this.style = style
  }

  render(): HTMLElement {
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
    return buttonElement
  }
}

export default Button
