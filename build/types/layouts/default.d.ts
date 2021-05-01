import { KeyboardLayoutInterface } from "../types";
declare const DefaultKeyboardLayout: (onPress?: (code: string, content: string, isBackspace: boolean, isTab: boolean, isEnter: boolean, isSpace: boolean, isShift: boolean) => void, additionalSettings?: Partial<KeyboardLayoutInterface>) => KeyboardLayoutInterface;
export { DefaultKeyboardLayout };
