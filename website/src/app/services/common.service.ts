import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { BehaviorSubject, debounceTime, map, Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  readonly BASE_URL = 'common';
  allData: any = {};
  private cartCnt = new BehaviorSubject<number>(0);
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private currentCartCount = 0;
  constructor(private http: ApiService, private httpClient: HttpClient) { }

  getAllMasterData(payload: any) {
    return this.http.get(this.BASE_URL, payload);
  }
  getAllProducts(payload: any): Observable<any> {
    const params = new HttpParams().set('name', payload);
    return this.httpClient.get('/product', { params }).pipe(map((res: any) => res));
  }

  getCntData() {
    return this.cartCnt.asObservable();
  }

  addToCart(quantity: number = 1) {
    this.currentCartCount += quantity;
    this.cartCnt.next(this.currentCartCount);
  }

  resetCart() {
    this.currentCartCount = 0;
    this.cartCnt.next(this.currentCartCount);
  }
  getLoginStatus() {
    return this.isLoggedIn.asObservable();
  }

  setLogin() {
    this.isLoggedIn.next(true);
  }
  setLogout() {
    this.isLoggedIn.next(false);
  }
}
