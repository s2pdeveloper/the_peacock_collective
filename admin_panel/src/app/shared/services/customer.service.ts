import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiService } from "@core/services";
@Injectable({
  providedIn: "root",
})
export class CustomerService {
  routes: any = {
    createPath: "customer/create",
    getAllPath: "customer/getAll",
    updatePath: (id: string) => `customer/update/${id}`,
    getByIdPath: (id: string) => `customer/getById/${id}`,
    deletePath: (id: string) => `customer/delete/${id}`,
  };
  constructor(private http: ApiService) {}

  create(payload: any) {
    return this.http
      .post(this.routes.createPath, payload)
      .pipe(map((res: any) => res));
  }
  getAll(params: any) {
    return this.http
      .get(this.routes.getAllPath, params)
      .pipe(map((res: any) => res));
  }

  update(id: string, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
  getById(id: string) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
  delete(id: string) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
}
