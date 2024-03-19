import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiService } from "@core/services";
@Injectable({
  providedIn: "root",
})
export class UserService {
  readonly BASE_URL = 'user'
  routes: any = {
    createPath: "user/signup",
    getAllPath: this.BASE_URL,
    updatePath: (id: string) => this.BASE_URL + '/' + id,
    getByIdPath: (id: string) => `user/profile/${id}`,
    deletePath: (id: string) => `user/${id}`,
  };
  constructor(private http: ApiService) { }

  createUser(payload: any) {
    return this.http
      .post(this.BASE_URL + '/signup' , payload)
      .pipe(map((res: any) => res));
  }
  login(payload: any) {
    return this.http
      .post(this.BASE_URL + '/login', payload)
      .pipe(map((res: any) => res));
  }
  getAllUsers(params: any) {
    return this.http
      .get(this.BASE_URL, params)
      .pipe(map((res: any) => res));
  }

  update(id,payload: any) {
    return this.http
      .put(this.BASE_URL + '/' + id, payload)
      .pipe(map((res: any) => res));
  }
  getById(payload: any) {
    return this.http
      .get(this.BASE_URL + '/profile',payload)
      .pipe(map((res: any) => res));
  }
  delete(id: string) {
    return this.http
      .delete(this.BASE_URL + '/' + id)
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
