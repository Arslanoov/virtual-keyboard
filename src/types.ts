// Keyboard
export interface KeyboardConfig {
  width: string,
  height: string,
  layout: KeyboardLayoutInterface
}

// Layout
export interface KeyboardLayoutButtonInterface {
  columnSize: number,
  rowSize: number,
  code: string,
  content: string,
  isCtrlKey: boolean,
  isMetaKey: boolean
}

export interface KeyboardLayoutStyle {
  button: {
    width: string,
    height: string,
    borderRadius: string
  }
}

export interface KeyboardLayoutInterface {
  columnsCount: number,
  rowsCount: number,
  columnGap: string,
  rowGap: string,
  buttons: KeyboardLayoutButtonInterface[],
  style: KeyboardLayoutStyle
}
