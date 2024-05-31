import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  readonly BASE_URL = 'common';
  allData: any = {};

  constructor(private http: ApiService) { }

  getAllMasterData(payload: any) {
    return this.http.get(this.BASE_URL, payload);
  }

}
