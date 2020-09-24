import { Observable } from '@nativescript/core';
export declare class Common extends Observable {
    message: string;
    constructor();
    greet(): string;
}
export declare class Utils {
    static SUCCESS_MSG(): string;
}
