import * as CSS from "csstype"

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
  shiftContent?: string,
  isCtrlKey?: boolean,
  isMetaKey?: boolean,
  isBackspace?: boolean,
  isTab?: boolean,
  isCaps?: boolean,
  isEnter?: boolean,
  isSpace?: boolean,
  isShift?: boolean,
  isAlt?: boolean
}

export interface KeyboardButtonStyle {
  minWidth: string,
  minHeight: string,
  background?: string,
  border: string,
  borderRadius: string,
  pressDuration: number,
  pressBackground: string
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
  additionalStyles?: CSS.Properties,
  onButtonClick: (
    code: string,
    content: string,
    isBackspace: boolean,
    isTab: boolean,
    isEnter: boolean,
    isSpace: boolean,
    isShift: boolean
  ) => void
}
