import { KeyboardLayoutInterface } from "../types"

const DefaultKeyboardLayout = (
  onPress: (code: string, content: string, isBackspace: boolean, isTab: boolean) => void
): KeyboardLayoutInterface => {
  return {
    columnsCount: 15,
    rowsCount: 5,
    columnGap: "5px",
    rowGap: "5px",
    onButtonClick: onPress,
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
      // Row 1
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 1,
        rowPosition: 1,
        code: "Backquote",
        content: "`"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 2,
        rowPosition: 1,
        code: "Digit1",
        content: "1"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 3,
        rowPosition: 1,
        code: "Digit2",
        content: "2"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 4,
        rowPosition: 1,
        code: "Digit3",
        content: "3"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 5,
        rowPosition: 1,
        code: "Digit4",
        content: "4"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 6,
        rowPosition: 1,
        code: "Digit5",
        content: "5"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 7,
        rowPosition: 1,
        code: "Digit6",
        content: "6"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 8,
        rowPosition: 1,
        code: "Digit7",
        content: "7"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 9,
        rowPosition: 1,
        code: "Digit8",
        content: "8"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 10,
        rowPosition: 1,
        code: "Digit9",
        content: "9"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 11,
        rowPosition: 1,
        code: "Digit0",
        content: "0"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 12,
        rowPosition: 1,
        code: "Minus",
        content: "-"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 13,
        rowPosition: 1,
        code: "Equal",
        content: "="
      },
      {
        columnSize: 2,
        rowSize: 1,
        columnPosition: 14,
        rowPosition: 1,
        code: "Backspace",
        content: "<-",
        isBackspace: true
      },

      // Row 2
      {
        columnSize: 2,
        rowSize: 1,
        columnPosition: 1,
        rowPosition: 2,
        code: "Tab",
        content: "TAB",
        isTab: true
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 3,
        rowPosition: 2,
        code: "KeyQ",
        content: "Q"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 4,
        rowPosition: 2,
        code: "KeyW",
        content: "W"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 5,
        rowPosition: 2,
        code: "KeyE",
        content: "E"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 6,
        rowPosition: 2,
        code: "KeyR",
        content: "R"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 7,
        rowPosition: 2,
        code: "KeyT",
        content: "T"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 8,
        rowPosition: 2,
        code: "KeyY",
        content: "Y"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 9,
        rowPosition: 2,
        code: "KeyU",
        content: "U"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 10,
        rowPosition: 2,
        code: "KeyI",
        content: "I"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 11,
        rowPosition: 2,
        code: "KeyO",
        content: "O"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 12,
        rowPosition: 2,
        code: "KeyP",
        content: "P"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 13,
        rowPosition: 2,
        code: "BracketLeft",
        content: "["
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 14,
        rowPosition: 2,
        code: "BracketRight",
        content: "]"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 15,
        rowPosition: 2,
        code: "Backslash",
        content: "\\"
      }
    ]
  }
}

export {
  DefaultKeyboardLayout
}
