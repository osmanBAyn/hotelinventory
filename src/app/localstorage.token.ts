import { InjectionToken } from "@angular/core";


export const LOCAL_STORAGE_TOKEN = new InjectionToken<Storage>('localstorage', {
    providedIn: 'root',
    factory: () => localStorage
});