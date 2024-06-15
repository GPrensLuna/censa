export interface ButtonFormTypes {
    label?: string | undefined | null | any;
    title?: string;
    types?: string;
    placeholder?: string;
    register?: any;
    error?: any;
    toastErro?: (() => void) | (() => undefined) | any;
    validationRules?: any;
}
