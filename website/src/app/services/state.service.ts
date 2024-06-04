import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey, StateKey } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    isBrowser = false;
    isServer = false;

    constructor(private transferState: TransferState) { }

    saveState<T>(key: string, data: any): void {
        this.transferState.set<T>(makeStateKey(key), data);
    }

    getState<T>(key: string, defaultValue: any = []): T {
        const state = this.transferState.get<T>(
            makeStateKey(key),
            defaultValue
        );
        console.log("state==========1", state);

        this.transferState.remove(makeStateKey(key));
        return state;
    }

    hasState<T>(key: string) {
        return this.transferState.hasKey<T>(makeStateKey(key));
    }



}