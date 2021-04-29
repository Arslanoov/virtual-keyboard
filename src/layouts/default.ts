import {
  KeyboardLayoutInterface
} from "../types"

const DefaultKeyboardLayout: KeyboardLayoutInterface = {
  columnsCount: 12,
  rowsCount: 12,
  buttons: [
    {
      columnSize: 1,
      rowSize: 1,
      code: "a",
      content: "a",
      isCtrlKey: false,
      isMetaKey: false
    }
  ]
}

export {
  DefaultKeyboardLayout
}
