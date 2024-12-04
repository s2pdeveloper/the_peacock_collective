import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BespokeService {
  readonly BASE_URL = 'bespoke';

  constructor(private http: ApiService) {}

  getAll() {
    return this.http.get(this.BASE_URL);
  }
  create(payload: any) {
    return this.http.post(this.BASE_URL, payload).pipe(map((res: any) => res));
  }
}
