import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export const ALL_DATA = makeStateKey('all_data');

@Injectable({
    providedIn: 'root'
})
export class StateService {

    private isServer = false;

    constructor(
        private tstate: TransferState,
        @Inject(PLATFORM_ID) platformId: Object,
    ) {
        this.isServer = isPlatformServer(platformId);
    }

    checkAndGetData(key: StateKey<any>, getDataObservable: Observable<any>, defaultValue: any = []) {
        if (this.tstate.hasKey(key)) {
            return of(this.tstate.get(key, defaultValue));
        } else {
            return getDataObservable.pipe(
                tap((data) => {
                    if (this.isServer) {
                        this.tstate.set(key, data);
                    }
                })
            );
        }
    }

    getDynamicStateKey(key: string) {
        return makeStateKey(key);
    }

}