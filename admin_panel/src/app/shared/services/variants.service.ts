import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariantsService {
  readonly BASE_URL = 'variant'

  constructor(private http: ApiService) { }

  getAll(payload: any) {
    return this.http.get(this.BASE_URL, payload)
  }
  create(payload: any) {
    return this.http
      .post(this.BASE_URL, payload)
      .pipe(map((res: any) => res));
  }

  update(id: any, payload: any) {
    return this.http
      .put(this.BASE_URL + '/' + id, payload)
      .pipe(map((res: any) => res));
  }
  updateAll(payload: any) {
    return this.http
      .put(this.BASE_URL + '/updateAll', payload)
      .pipe(map((res: any) => res));
  }
  delete(id: any) {
    return this.http
      .delete(this.BASE_URL + '/' + id)
      .pipe(map((res: any) => res));
  }
  getById(id: any) {
    return this.http
      .get(this.BASE_URL + '/' + id)
      .pipe(map((res: any) => res));
  }
  getByProductId(id: any) {
    return this.http
      .get(this.BASE_URL + '/getByProductId/' + id)
      .pipe(map((res: any) => res));
  }
  getAllProductVariant(payload: any) {
    return this.http.get(this.BASE_URL + '/getAllProductVariant', payload)
  }
}
