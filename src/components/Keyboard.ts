import { KeyboardConfig, KeyboardLayoutInterface } from "../types"
import { addStyles } from "../helpers/styles"

import Button from "./Button"

class Keyboard {
  private readonly rendered: HTMLElement
  private readonly languages: KeyboardLayoutInterface[]
  private config: KeyboardConfig
  private currentLanguageIndex: number
  private renderedButtons: Button[]
  private capsMode: boolean

  constructor(config: KeyboardConfig, languages: KeyboardLayoutInterface[] = []) {
    this.languages = [config.layout].concat(languages)
    this.config = config
    this.currentLanguageIndex = 0
    this.rendered = document.createElement("div")
    this.renderedButtons = []
    this.capsMode = false
    this.init()
  }

  public get layout(): KeyboardLayoutInterface {
    return this.languages[this.currentLanguageIndex % this.languages.length]
  }

  public addLanguage(layout: KeyboardLayoutInterface): void {
    this.languages.push(layout)
  }

  public changeLanguage(): void {
    this.currentLanguageIndex++
    this.rerenderButtons(this.capsMode)
  }

  public init(): void {
    this.rendered.classList.add("a-virtual-keyboard")
    addStyles(this.rendered, {
      width: this.config.width,
      height: this.config.height
    })

    this.renderLayout()
    this.renderButtons()
    this.initKeyDown()
    this.initShiftChange()
    this.initLanguageChange()
  }

  public initKeyDown(): void {
    document.addEventListener("keydown", this.onButtonAction(undefined))
  }

  public initShiftChange(): void {
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

  public initLanguageChange(): void {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === "Space") {
        this.changeLanguage()
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
        `repeat(${this.layout.columnsCount}, minmax(${this.layout.style.button.minWidth}, 1fr))`,
      gridTemplateRows:
        `repeat(${this.layout.rowsCount}, minmax(${this.layout.style.button.minHeight}, 1fr))`,
      rowGap: this.layout.rowGap,
      columnGap: this.layout.columnGap,
      padding: this.layout.style.padding,
      background: this.layout.style.background,
      borderTop: this.layout.style.borderTop,
      borderBottom: this.layout.style.borderBottom,
      borderLeft: this.layout.style.borderLeft,
      borderRight: this.layout.style.borderRight,
      border: this.layout.style.border,
      ...this.layout.additionalStyles
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

        if (
          e instanceof KeyboardEvent &&
          button.content.toLowerCase() !== button.content.toUpperCase() &&
          !button.isMeta
        ) {
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

        this.layout.onButtonClick(
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
    this.layout.buttons.forEach(config => {
      const button = new Button(config, this.layout.style.button)
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
