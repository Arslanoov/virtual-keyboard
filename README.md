# Simple Virtual Keyboard

Install:

    npm i -S simple-virtual-keyboard

Setup:
    
    const keyboard = new Keyboard({
        layout: DefaultKeyboardLayout(handler, layoutConfig)
    })

Add languages (en and ru built-in):

    const keyboard = new Keyboard({
        layout: DefaultKeyboardLayout(handler, layoutConfig),
        width: "100%" // ...layout additional settings
    }, [
        // Languages list
        RussianLanguage(writeText, layoutConfig)
    ])

Custom layout and languages:

    const Language/Layout = (
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
            ...your language/layout config
        }
    )

## Demo

    git clone https://github.com/Arslanoov/virtual-keyboard.git

    npm i

    npm run demo
