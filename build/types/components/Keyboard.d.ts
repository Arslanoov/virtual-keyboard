import { KeyboardConfig } from "../types";
declare class Keyboard {
    private config;
    private renderedButtons;
    private capsMode;
    private readonly rendered;
    constructor(config: KeyboardConfig);
    init(): void;
    mount(selector: string): void;
    destroy(): void;
    private renderLayout;
    private enableShiftMode;
    private disableShiftMode;
    private onButtonAction;
    private toggleCapsMode;
    private enableCapsMode;
    private disableCapsMode;
    private rerenderButtons;
    private destroyButtons;
    private renderButtons;
}
export default Keyboard;
