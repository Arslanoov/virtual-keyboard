import { KeyboardButtonStyle, KeyboardLayoutButtonInterface } from "../types";
declare class Button {
    private config;
    private style;
    element: HTMLElement | null;
    handler: (() => void) | null;
    constructor(config: KeyboardLayoutButtonInterface, style: KeyboardButtonStyle);
    get code(): string;
    get content(): string;
    get shiftContent(): string | null;
    get isBackspace(): boolean;
    get isTab(): boolean;
    get isCaps(): boolean;
    get isEnter(): boolean;
    get isShift(): boolean;
    get isSpace(): boolean;
    get isMeta(): boolean;
    setHandler(handler: () => void): void;
    toggleCase(capsMode: boolean): void;
    render(withShift?: boolean): HTMLElement;
    press(): void;
    push(): void;
    unPush(): void;
}
export default Button;
