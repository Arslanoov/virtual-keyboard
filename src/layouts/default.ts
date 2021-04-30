import {
  KeyboardLayoutInterface
} from "../types"

const DefaultKeyboardLayout: KeyboardLayoutInterface = {
  columnsCount: 15,
  rowsCount: 5,
  columnGap: "5px",
  rowGap: "5px",
  style: {
    padding: "10px",
    background: "#4cbefa",
    borderTop: "1px solid #7acffb",
    borderBottom: "1px solid #49a9db",
    button: {
      minWidth: "50px",
      minHeight: "50px",
      background: "#78e2aa",
      border: "1px solid #a1ebc4",
      borderRadius: "5px"
    }
  },
  buttons: [
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 1,
      rowPosition: 1,
      code: "`",
      content: "`",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 2,
      rowPosition: 1,
      code: "1",
      content: "1",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 3,
      rowPosition: 1,
      code: "2",
      content: "2",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 4,
      rowPosition: 1,
      code: "3",
      content: "3",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 5,
      rowPosition: 1,
      code: "4",
      content: "4",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 6,
      rowPosition: 1,
      code: "5",
      content: "5",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 7,
      rowPosition: 1,
      code: "6",
      content: "6",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 8,
      rowPosition: 1,
      code: "7",
      content: "7",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 9,
      rowPosition: 1,
      code: "8",
      content: "8",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 10,
      rowPosition: 1,
      code: "9",
      content: "9",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 11,
      rowPosition: 1,
      code: "0",
      content: "0",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 12,
      rowPosition: 1,
      code: "-",
      content: "-",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 1,
      rowSize: 1,
      columnPosition: 13,
      rowPosition: 1,
      code: "=",
      content: "=",
      isCtrlKey: false,
      isMetaKey: false
    },
    {
      columnSize: 2,
      rowSize: 1,
      columnPosition: 14,
      rowPosition: 1,
      code: "0",
      content: "<-",
      isCtrlKey: false,
      isMetaKey: false
    }
  ]
}

export {
  DefaultKeyboardLayout
}
