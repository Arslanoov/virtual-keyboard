// Keyboard
export interface KeyboardConfig {
  width?: string,
  height?: string,
  listenMode?: boolean,
  layout: KeyboardLayoutInterface
}

// Layout
export interface KeyboardLayoutButtonInterface {
  columnSize: number,
  rowSize: number,
  columnPosition: number,
  rowPosition: number,
  code: string,
  content: string,
  isCtrlKey?: boolean,
  isMetaKey?: boolean,
  isBackspace?: boolean
}

export interface KeyboardButtonStyle {
  minWidth: string,
  minHeight: string,
  background?: string,
  border: string,
  borderRadius: string
}

export interface KeyboardLayoutStyle {
  padding?: string,
  background?: string,
  border?: string,
  borderTop?: string,
  borderBottom?: string,
  borderLeft?: string,
  borderRight?: string,
  button: KeyboardButtonStyle
}

export interface KeyboardLayoutInterface {
  columnsCount: number,
  rowsCount: number,
  columnGap: string,
  rowGap: string,
  buttons: KeyboardLayoutButtonInterface[],
  style: KeyboardLayoutStyle,
  onButtonClick: (code: string, content: string, isBackspace: boolean) => void
}
