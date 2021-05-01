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
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.shiftKey) {
        this.enableShiftMode(e.code)
      }
    })
    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.code === "ShiftRight" || e.code === "ShiftLeft") {
        this.disableShiftMode(e.code)
      }
    })
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

  private enableShiftMode(shiftCode: string): void {
    this.renderedButtons.forEach(button => {
      if (button.isShift && shiftCode === button.code) {
        button.push()
      }
    })
    this.enableCapsMode()
  }

  private disableShiftMode(shiftCode: string): void {
    this.renderedButtons.forEach(button => {
      if (button.isShift && shiftCode === button.code) {
        button.unPush()
      }
    })
    if (this.capsMode) {
      this.disableCapsMode()
    }
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

        if (!button.isShift) {
          button.press()
        }

        if (e instanceof KeyboardEvent && e?.key && (isNaN(parseFloat(e.key)) || !isFinite(e.key as unknown as number))) {
          if (e?.key === button.content.toLowerCase()) {
            this.disableCapsMode()
          }

          if (e?.key === button.content.toUpperCase()) {
            this.enableCapsMode()
          }
        }

        let content = button.content
        if (e?.shiftKey && button.shiftContent) {
          content = button.shiftContent
        }

        this.config.layout.onButtonClick(
          button.code,
          content,
          button.isBackspace,
          button.isTab,
          button.isEnter,
          button.isSpace,
          button.isShift
        )
      }
    }
  }

  private toggleCapsMode(): void {
    this.capsMode = !this.capsMode
    this.rerenderButtons()
  }

  private enableCapsMode(): void {
    if (!this.capsMode) {
      this.capsMode = true
      this.rerenderButtons(false, true)
    }
  }

  private disableCapsMode(): void {
    if (this.capsMode) {
      this.capsMode = false
      this.rerenderButtons(false)
    }
  }

  private rerenderButtons(pressCaps = true, withShift = false): void {
    this.destroyButtons()
    this.renderButtons(pressCaps, withShift)
  }

  private destroyButtons(): void {
    this.renderedButtons.map(button => button.element?.removeEventListener("click", button.handler as () => void))
    this.renderedButtons = []
    this.rendered.innerHTML = ""
  }

  private renderButtons(pressCaps = false, withShift = false): void {
    this.config.layout.buttons.forEach(config => {
      const button = new Button(config, this.config.layout.style.button)
      button.toggleCase(this.capsMode)

      const renderedButton = button.render(withShift)
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
