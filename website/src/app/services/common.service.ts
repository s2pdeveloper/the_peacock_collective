import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from '../core/services';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  readonly BASE_URL = 'common';
  API_URL = 'cart/';
  allData: any = [];
  cartData: any = [];

  constructor(private http: ApiService) {}

  getAllMasterData(payload: any) {
    return this.http.get(this.BASE_URL, payload).pipe(map((res: any) => res));
  }
  getAllCart(id: any) {
    return this.http.get(this.API_URL + id).pipe(map((res: any) => res));
  }
}
