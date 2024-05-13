import { Inject, Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
  ) {

  }

  get(key: string): any {
    if (isPlatformBrowser(this._platformId)) {
      let data: any = localStorage.getItem(key);
      return localStorage ? JSON.parse(data) : null;
    } else {
      return null
    }

  }

  set(key: string, value: any): void {
    if (isPlatformBrowser(this._platformId)) {
      if (localStorage) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } else {
      return null
    }


  }
  remove(key: string): any {
    if (isPlatformBrowser(this._platformId)) {
      localStorage ? localStorage.removeItem(key) : null;
    } else {
      return null
    }
  }
}
