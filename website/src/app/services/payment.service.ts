import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  readonly BASE_URL = 'payment';
  constructor(private http: ApiService) { }
  pay(token) {
    return this.http.post(this.BASE_URL , { token: token })
  }

}
