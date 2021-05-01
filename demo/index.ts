import "./index.scss"

import Keyboard , { DefaultKeyboardLayout } from "../src/index"
import "../src/styles/index.scss"

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

const keyboard = new Keyboard({
  layout: DefaultKeyboardLayout(writeText, {
    additionalStyles: {
      maxWidth: "1350px"
    }
  }),
  width: "100%"
})

keyboard.mount("#app")

// window.setTimeout(() => keyboard.destroy(), 5000)
