import "./index.scss"

import Keyboard, { DefaultKeyboardLayout } from "../src/index"

const writeText = (text: string, isBackspace: boolean): void => {
  const textElement = document.querySelector("#text")
  if (textElement) {
    if (isBackspace) {
      (textElement as HTMLElement).innerText = (textElement as HTMLElement).innerText.slice(0, -1)
    } else {
      (textElement as HTMLElement).innerText += text
    }
  }
}

const keyboard = new Keyboard({
  layout: DefaultKeyboardLayout(
    (code: string, content: string, isBackspace = false): void => writeText(content, isBackspace)
  ),
  width: "100%"
})

keyboard.mount("#app")

// window.setTimeout(() => keyboard.destroy(), 5000)
