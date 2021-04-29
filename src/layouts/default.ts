import {
  KeyboardLayoutInterface
} from "../types"

const DefaultKeyboardLayout: KeyboardLayoutInterface = {
  columnsCount: 15,
  rowsCount: 5,
  columnGap: "5px",
  rowGap: "5px",
  style: {
    button: {
      width: "25px",
      height: "25px",
      borderRadius: "5px"
    }
  },
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
