import Keyboard, { DefaultKeyboardLayout } from "../src/index"

const keyboard = new Keyboard({
  width: "100%",
  height: "500px",
  layout: DefaultKeyboardLayout
})

keyboard.mount("#app")
