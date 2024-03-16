import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map, of } from 'rxjs';
import { StorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AppGlobalService {
  costEstimateCalculateData: any = {};
  moduleName: any = '';
  menuItemId: any = '';
  private dataSource = new BehaviorSubject<any>({});
  public data = this.dataSource.asObservable();
  globalData: any = null;
  rolesPermission: any = [];
  labelsJSON: any = [];
  cardData: any = [];
  setData(value: any) {
    this.dataSource.next(value);
    this.globalData = value;
    // console.log('this.globalData', this.globalData);
  }

  getData(keys: any = []) {
    return this.data.pipe(
      map((res: any) => {
        let pickData = this.pickValue(res, keys);
        return pickData;
      })
    );
  }




  constructor(
    private storageService: StorageService
  ) {}

  /**
   * Create an object composed of the picked object properties
   * @param {Object} object
   * @param {string[]} keys
   * @returns {Object}
   */
  pickValue(object: any, keys: any) {
    return keys.reduce((obj: any, key: any) => {
      if (object && Object.prototype.hasOwnProperty.call(object, key)) {
        obj[key] = object[key];
      }
      return obj;
    }, {});
  }
}
