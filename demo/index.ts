import "./index.scss"

import Keyboard, { DefaultKeyboardLayout } from "../src/index"

const writeText = (code: string, content: string, isBackspace: boolean, isTab: boolean): void => {
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

    textElement.innerText += content
  }
}

const keyboard = new Keyboard({
  layout: DefaultKeyboardLayout(writeText),
  width: "100%"
})

keyboard.mount("#app")

// window.setTimeout(() => keyboard.destroy(), 5000)
