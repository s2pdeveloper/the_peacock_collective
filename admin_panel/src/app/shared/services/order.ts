import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  routes: any = {
    getAllPath: "order",
    getByIdPath: (id: string) => `order/${id}`,
    updatePath: (id: string) => `order/${id}`,
    // deletePath: (id: string) => `bespoke/${id}`,
  };

  constructor(private http: ApiService) {}

  getAll(payload: any) {
    return this.http.get(this.routes.getAllPath, payload);
  }
  getById(id: any) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
  update(id: any, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
  // delete(id: any) {
  //   return this.http
  //     .delete(this.routes.deletePath(id))
  //     .pipe(map((res: any) => res));
  // }
}
