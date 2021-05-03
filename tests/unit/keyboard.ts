import Keyboard, { DefaultKeyboardLayout, RussianLanguage } from "../../src"

import { KeyboardLayoutInterface } from "../../src/types"

const layoutConfig: Partial<KeyboardLayoutInterface> = {
  additionalStyles: {
    maxWidth: "1350px"
  }
}

describe("Keyboard", () => {
  it("success creates",  () => {
    const en = DefaultKeyboardLayout(() => {}, layoutConfig)
    const ru = RussianLanguage(() => {}, layoutConfig)

    const keyboard = new Keyboard({
        layout: en,
        width: "100%"
      },
      [
        ru
      ]
    )

    expect(keyboard.languagesList).toStrictEqual([
      en,
      ru
    ])
    expect(keyboard.languagesList.length).toBe(2)
    expect(keyboard.layout).toBe(en)
  })

  it("changes and adds languages",  () => {
    const en = DefaultKeyboardLayout(() => {}, layoutConfig)
    const ru = RussianLanguage(() => {}, layoutConfig)

    const keyboard = new Keyboard({
        layout: en,
        width: "100%"
      },
      [
        ru
      ]
    )

    expect(keyboard.languagesList.length).toBe(2)

    expect(keyboard.layout).toBe(en)

    keyboard.changeLanguage()

    expect(keyboard.layout).toBe(ru)

    keyboard.addLanguage(ru)
    keyboard.addLanguage(ru)

    expect(keyboard.languagesList.length).toBe(4)

    keyboard.changeLanguage()

    expect(keyboard.layout).toBe(ru)
  })
})
