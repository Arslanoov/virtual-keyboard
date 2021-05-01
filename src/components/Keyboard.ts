import { KeyboardConfig } from "../types"
import { addStyles } from "../helpers/styles"

import Button from "./Button"

class Keyboard {
  private config: KeyboardConfig
  private renderedButtons: Button[]
  private capsMode: boolean
  private readonly rendered: HTMLElement

  constructor(config: KeyboardConfig) {
    this.config = config
    this.rendered = document.createElement("div")
    this.renderedButtons = []
    this.capsMode = false
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
    document.addEventListener("keydown", this.onButtonAction(undefined))
  }

  public mount(selector: string): void {
    const element: HTMLElement | null = document.querySelector(selector)
    if (element) {
      element.appendChild(this.rendered)
    }
  }

  public destroy(): void {
    this.destroyButtons()
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
      border: this.config.layout.style.border,
      ...this.config.layout.additionalStyles
    })
  }

  private onButtonAction(code?: string): (e?: KeyboardEvent | MouseEvent) => void {
    return (e?: KeyboardEvent | MouseEvent) => {
      let keyCode = code
      if (e instanceof KeyboardEvent) {
        keyCode = e?.code
      }

      const button = this.renderedButtons.find(button => button.code === keyCode)
      if (button) {
        e?.preventDefault()

        if (button.isCaps) {
          this.toggleCapsMode()
          return
        }

        button.press()

        this.config.layout.onButtonClick(
          button.code,
          button.content,
          button.isBackspace,
          button.isTab,
          button.isEnter,
          button.isSpace
        )
      }
    }
  }

  private toggleCapsMode(): void {
    this.capsMode = !this.capsMode
    this.rerenderButtons()
  }

  private rerenderButtons(): void {
    this.destroyButtons()
    this.renderButtons(true)
  }

  private destroyButtons(): void {
    this.renderedButtons.map(button => button.element?.removeEventListener("click", button.handler as () => void))
    this.rendered.innerHTML = ""
  }

  private renderButtons(pressCaps = false): void {
    this.config.layout.buttons.forEach(config => {
      const button = new Button(config, this.config.layout.style.button)
      button.toggleCase(this.capsMode)

      const renderedButton = button.render()
      if (!this.config.listenMode) {
        const onClick = this.onButtonAction(button.code)
        button.setHandler(onClick)
        renderedButton.addEventListener("click", onClick)
      }

      if (pressCaps && button.isCaps) {
        button.press()
      }

      this.renderedButtons.push(button)
      this.rendered.appendChild(renderedButton)
    })
  }
}

export default Keyboard
