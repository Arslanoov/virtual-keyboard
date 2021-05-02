import "./index.scss"

import Keyboard, { DefaultKeyboardLayout, RussianLanguage } from "../src/index"
import {KeyboardLayoutInterface} from "../src/types";

const writeText = (
  code: string,
  content: string,
  isBackspace: boolean,
  isTab: boolean,
  isEnter: boolean,
  isSpace: boolean,
  isShift: boolean
): void => {
  const textElement = document.querySelector("#text") as HTMLElement
  if (textElement) {
    if (isBackspace) {
      textElement.innerText = textElement.innerText.slice(0, -1)
      return
    }

    if (isTab) {
      textElement.innerText += `    `
      return
    }

    if (isEnter) {
      textElement.innerText += "\n"
      return
    }

    if (isSpace) {
      textElement.innerText += " "
      return
    }

    if (isShift) return

    textElement.innerText += content
  }
}

const layoutConfig: Partial<KeyboardLayoutInterface> = {
  additionalStyles: {
    maxWidth: "1350px"
  }
}

const keyboard = new Keyboard({
  layout: DefaultKeyboardLayout(writeText, layoutConfig),
    width: "100%"
  },
  [
    RussianLanguage(writeText, layoutConfig)
  ]
)

keyboard.mount("#app")

// window.setTimeout(() => keyboard.destroy(), 5000)
