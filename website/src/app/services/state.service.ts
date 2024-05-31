import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

// export const ALL_DATA = makeStateKey('all_data');

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
        this.transferState.remove(makeStateKey(key));
        return state;
    }

    hasState<T>(key: string) {
        return this.transferState.hasKey<T>(makeStateKey(key));
    }



}