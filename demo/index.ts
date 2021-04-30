import "./index.scss"

import Keyboard, { DefaultKeyboardLayout } from "../src/index"

const keyboard = new Keyboard({
  layout: DefaultKeyboardLayout,
  width: "100%"
})

keyboard.mount("#app")
