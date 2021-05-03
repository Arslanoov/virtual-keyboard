import { KeyboardLayoutInterface } from "../../types"

const RussianLanguage = (
  onPress: (
    code: string,
    content: string,
    isBackspace: boolean,
    isTab: boolean,
    isEnter: boolean,
    isSpace: boolean,
    isShift: boolean
  ) => void = () => {},
  additionalSettings: Partial<KeyboardLayoutInterface> = {}
): KeyboardLayoutInterface => {
  return {
    columnsCount: 15,
    rowsCount: 5,
    columnGap: "5px",
    rowGap: "8px",
    additionalStyles: {
      maxWidth: "1300px"
    },
    onButtonClick: onPress,
    style: {
      padding: "10px",
      background: "#4cbefa",
      borderTop: "1px solid #7acffb",
      borderBottom: "1px solid #49a9db",
      button: {
        minWidth: "35px",
        minHeight: "50px",
        background: "#78e2aa",
        border: "1px solid #a1ebc4",
        borderRadius: "5px",
        pressDuration: 150,
        pressBackground: "blue"
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
        content: "Ё"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 2,
        rowPosition: 1,
        code: "Digit1",
        content: "1",
        shiftContent: "!"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 3,
        rowPosition: 1,
        code: "Digit2",
        content: "2",
        shiftContent: "@"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 4,
        rowPosition: 1,
        code: "Digit3",
        content: "3",
        shiftContent: "#"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 5,
        rowPosition: 1,
        code: "Digit4",
        content: "4",
        shiftContent: "$"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 6,
        rowPosition: 1,
        code: "Digit5",
        content: "5",
        shiftContent: "%"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 7,
        rowPosition: 1,
        code: "Digit6",
        content: "6",
        shiftContent: "^"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 8,
        rowPosition: 1,
        code: "Digit7",
        content: "7",
        shiftContent: "7"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 9,
        rowPosition: 1,
        code: "Digit8",
        content: "8",
        shiftContent: "*"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 10,
        rowPosition: 1,
        code: "Digit9",
        content: "9",
        shiftContent: "("
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 11,
        rowPosition: 1,
        code: "Digit0",
        content: "0",
        shiftContent: ")"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 12,
        rowPosition: 1,
        code: "Minus",
        content: "-",
        shiftContent: "_"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 13,
        rowPosition: 1,
        code: "Equal",
        content: "=",
        shiftContent: "+"
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
        content: "Й"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 4,
        rowPosition: 2,
        code: "KeyW",
        content: "Ц"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 5,
        rowPosition: 2,
        code: "KeyE",
        content: "У"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 6,
        rowPosition: 2,
        code: "KeyR",
        content: "К"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 7,
        rowPosition: 2,
        code: "KeyT",
        content: "Е"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 8,
        rowPosition: 2,
        code: "KeyY",
        content: "Н"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 9,
        rowPosition: 2,
        code: "KeyU",
        content: "Г"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 10,
        rowPosition: 2,
        code: "KeyI",
        content: "Ш"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 11,
        rowPosition: 2,
        code: "KeyO",
        content: "Щ"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 12,
        rowPosition: 2,
        code: "KeyP",
        content: "З"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 13,
        rowPosition: 2,
        code: "BracketLeft",
        content: "Х"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 14,
        rowPosition: 2,
        code: "BracketRight",
        content: "Ъ"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 15,
        rowPosition: 2,
        code: "Backslash",
        content: "\\",
        shiftContent: "/"
      },

      // Row 3
      {
        columnSize: 2,
        rowSize: 1,
        columnPosition: 1,
        rowPosition: 3,
        code: "CapsLock",
        content: "CAPS",
        isCaps: true
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 3,
        rowPosition: 3,
        code: "KeyA",
        content: "Ф"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 4,
        rowPosition: 3,
        code: "KeyS",
        content: "Ы"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 5,
        rowPosition: 3,
        code: "KeyD",
        content: "В"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 6,
        rowPosition: 3,
        code: "KeyF",
        content: "А"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 7,
        rowPosition: 3,
        code: "KeyG",
        content: "П"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 8,
        rowPosition: 3,
        code: "KeyH",
        content: "Р"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 9,
        rowPosition: 3,
        code: "KeyJ",
        content: "О"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 10,
        rowPosition: 3,
        code: "KeyK",
        content: "Л"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 11,
        rowPosition: 3,
        code: "KeyL",
        content: "Д"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 12,
        rowPosition: 3,
        code: "Semicolon",
        content: "Ж"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 13,
        rowPosition: 3,
        code: "Quote",
        content: "Э"
      },
      {
        columnSize: 2,
        rowSize: 1,
        columnPosition: 14,
        rowPosition: 3,
        code: "Enter",
        content: "ENTER",
        isEnter: true
      },

      // Row 4
      {
        columnSize: 3,
        rowSize: 1,
        columnPosition: 1,
        rowPosition: 4,
        code: "ShiftLeft",
        content: "SHIFT",
        isShift: true
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 4,
        rowPosition: 4,
        code: "KeyZ",
        content: "Я"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 5,
        rowPosition: 4,
        code: "KeyX",
        content: "Ч"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 6,
        rowPosition: 4,
        code: "KeyC",
        content: "С"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 7,
        rowPosition: 4,
        code: "KeyV",
        content: "М"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 8,
        rowPosition: 4,
        code: "KeyB",
        content: "И"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 9,
        rowPosition: 4,
        code: "KeyN",
        content: "Т"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 10,
        rowPosition: 4,
        code: "KeyM",
        content: "Ь"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 11,
        rowPosition: 4,
        code: "Comma",
        content: "Б"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 12,
        rowPosition: 4,
        code: "Period",
        content: "Ю"
      },
      {
        columnSize: 1,
        rowSize: 1,
        columnPosition: 13,
        rowPosition: 4,
        code: "Slash",
        content: ".",
        shiftContent: ","
      },
      {
        columnSize: 2,
        rowSize: 1,
        columnPosition: 14,
        rowPosition: 4,
        code: "ShiftRight",
        content: "SHIFT",
        isShift: true
      },

      // Row 5
      {
        columnSize: 8,
        rowSize: 1,
        columnPosition: 5,
        rowPosition: 5,
        code: "Space",
        content: "",
        isSpace: true
      },
    ],
    ...additionalSettings
  }
}

export {
  RussianLanguage
}
