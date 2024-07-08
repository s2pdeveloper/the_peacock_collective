import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  readonly BASE_URL = 'payment';
  constructor(private http: ApiService) { }
  pay(payload) {
    return this.http.post(this.BASE_URL ,  payload )
  }
  createTransaction(payload){
    return this.http.post('transactions' , payload )
  }
}
