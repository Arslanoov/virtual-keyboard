import { addStyles } from "../helpers/styles"

import {
  KeyboardButtonStyle,
  KeyboardLayoutButtonInterface
} from "../types"

class Button {
  private config: KeyboardLayoutButtonInterface
  private style: KeyboardButtonStyle
  public element: HTMLElement | null
  public handler: (() => void) | null

  constructor(config: KeyboardLayoutButtonInterface, style: KeyboardButtonStyle) {
    this.config = config
    this.style = style
    this.element = null
    this.handler = null
  }

  public get code(): string {
    return this.config.code
  }

  public get content(): string  {
    return this.config.content
  }

  public get shiftContent(): string | null {
    return this.config.shiftContent ?? null
  }

  public get isBackspace(): boolean {
    return this.config.isBackspace ?? false
  }

  public get isTab(): boolean {
    return this.config.isTab ?? false
  }

  public get isCaps(): boolean {
    return this.config.isCaps ?? false
  }

  public get isEnter(): boolean {
    return this.config.isEnter ?? false
  }

  public get isShift(): boolean {
    return this.config.isShift ?? false
  }

  public get isSpace(): boolean {
    return this.config.isSpace ?? false
  }

  public get isMeta(): boolean {
    return this.isBackspace || this.isTab || this.isCaps || this.isEnter || this.isShift || this.isSpace
  }

  public setHandler(handler: () => void): void {
    this.handler = handler
  }

  public toggleCase(capsMode: boolean): void {
    if (!this.isMeta) {
      this.config.content = capsMode ? this.content.toUpperCase() : this.content.toLowerCase()
    }
  }

  public render(withShift = false): HTMLElement {
    const buttonElement = document.createElement("div")
    buttonElement.classList.add("a-virtual-keyboard__button")
    buttonElement.innerText = withShift ? this.config.shiftContent || this.config.content : this.config.content

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

    this.push()
    window.setTimeout(() => this.unPush(), this.style.pressDuration)
  }

  public push(): void {
    addStyles(this.element as HTMLElement, {
      background: this.style.pressBackground
    })
  }

  public unPush(): void {
    addStyles(this.element as HTMLElement, {
      background: this.style.background
    })
  }
}

export default Button
