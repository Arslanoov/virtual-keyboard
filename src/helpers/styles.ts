import * as CSS from "csstype"

export const addStyles = (element: HTMLElement, styles: CSS.Properties): void => {
  if (element) {
    Object.assign(element.style, styles)
  }
}
