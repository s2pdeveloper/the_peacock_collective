import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiService } from "@core/services";
@Injectable({
  providedIn: "root",
})
export class ShopService {
  routes: any = {
    createOrUpdatePath: "shop/createOrUpdate",
    getByIdPath:  `shop/getById`,
  };

  constructor(private http: ApiService) { }

  createOrUpdate(payload: any) {
    return this.http
      .post(this.routes.createOrUpdatePath, payload)
      .pipe(map((res: any) => res));
  }
  getById() {
    return this.http
      .get(this.routes.getByIdPath)
      .pipe(map((res: any) => res));
  }

}
