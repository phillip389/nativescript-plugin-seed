import { Observable } from '@nativescript/core';
import { YourPlugin } from 'nativescript-yourplugin';

export class HelloWorldModel extends Observable {
    public message: string;
    private yourPlugin: YourPlugin;

    constructor() {
        super();

        this.yourPlugin = new YourPlugin();
        this.message = this.yourPlugin.message;
    }
}
