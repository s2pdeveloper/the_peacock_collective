import { Injectable } from "@angular/core";
// import { environment } from "src/environments/environment";
// import { Router } from "@angular/router";
import { map } from "rxjs";
import { ApiService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class AttributeService {
  readonly BASE_URL = 'attribute'

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
}
