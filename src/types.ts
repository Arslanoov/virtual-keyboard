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

export interface KeyboardLayoutInterface {
  columnsCount: number,
  rowsCount: number,
  buttons: KeyboardLayoutButtonInterface[]
}
