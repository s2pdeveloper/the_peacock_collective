import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiService } from "@core/services";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  routes: any = {
    createPath: "user/register",
    loginPath: "user/login",
    forgetPath: "user/forgot-password",
  };

  constructor(private http: ApiService) {}

  getUser() {
    return localStorage.getItem("Peacock_User")
      ? JSON.parse(localStorage.getItem("Peacock_User"))
      : null;
  }
  create(payload: any) {
    return this.http
      .post(this.routes.createPath, payload)
      .pipe(map((res: any) => res));
  }
  login(payload: any) {
    return this.http
      .post(this.routes.loginPath, payload)
      .pipe(map((res: any) => res));
  }
  forgetpass(payload: any) {
    return this.http
      .post(this.routes.forgetPath, payload)
      .pipe(map((res: any) => res));
  }
}
