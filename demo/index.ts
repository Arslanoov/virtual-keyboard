import Keyboard, { DefaultKeyboardLayout } from "../src/index"

const keyboard = new Keyboard({
  width: "700px",
  height: "500px",
  layout: DefaultKeyboardLayout
})

keyboard.mount("#app")
