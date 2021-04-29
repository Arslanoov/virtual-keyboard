import * as CSS from "csstype"

export const addClasses = (element: HTMLElement, styles: CSS.Properties): void => {
  if (element) {
    Object.assign(element.style, styles)
  }
}
