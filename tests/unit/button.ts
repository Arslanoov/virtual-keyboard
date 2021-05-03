import Button from "../../src/components/Button"

const content = "A"

const config = {
  columnSize: 12,
  rowSize: 13,
  columnPosition: 2,
  rowPosition: 3,
  code: "KeyA",
  content: content,
  shiftContent: "S",
  isSpace: true
}

const style = {
  minWidth: "200px",
  minHeight: "200px",
  border: "2px solid red",
  borderRadius: "2px",
  pressDuration: 200,
  pressBackground: "red"
}

describe("Keyboard Button", () => {
  it("success creates",  () => {
    const button: Button = new Button(config, style)

    expect(button.isMeta).toBe(true)
    expect(button.isSpace).toBe(true)
    expect(button.isShift).toBe(false)
    expect(button.isCaps).toBe(false)
    expect(button.isEnter).toBe(false)
    expect(button.isTab).toBe(false)
    expect(button.isBackspace).toBe(false)
  })

  it("toggles case",  () => {
    const button: Button = new Button({
      ...config,
      isSpace: false
    }, style)

    expect(button.isMeta).toBe(false)
    expect(button.isSpace).toBe(false)

    button.toggleCase(true)

    expect(button.content).toBe(content)

    button.toggleCase(false)

    expect(button.content).toBe(content.toLowerCase())
  })

  it("not presses not rendered button",  () => {
    const button: Button = new Button(config, style)

    const press = () => button.press()

    expect(press).toThrow(Error)
  })

  it("presses rendered button",  () => {
    const button: Button = new Button(config, style)

    button.render()

    button.press()
  })
})
