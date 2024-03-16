import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiService } from "@core/services";
@Injectable({
  providedIn: "root",
})
export class UserService {
  routes: any = {
    createPath: "user/register",
    getAllPath: "user/getAll",
    updatePath: (id: string) => `user/update/${id}`,
    getByIdPath: (id: string) => `user/profile/${id}`,
    deletePath: (id: string) => `user/delete/${id}`,
  };
  constructor(private http: ApiService) {}

  createUser(payload: any) {
    return this.http
      .post(this.routes.createPath, payload)
      .pipe(map((res: any) => res));
  }
  login(payload: any) {
    return this.http
      .post(this.routes.loginPath, payload)
      .pipe(map((res: any) => res));
  }
  getAllUsers(params: any) {
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

  getAddressByIdPath(id: string) {
    return this.http
      .get(this.routes.getAddressByIdPath(id))
      .pipe(map((res: any) => res));
  }

  getAllCustomerAddressById(id: any) {
    return this.http
      .get(this.routes.getAllCustomerAddressById(id))
      .pipe(map((res: any) => res));
  }
}
