﻿import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "@core/services";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    if (typeof window !== "undefined") {
      let user: any = this.storageService.get("Inv_Bill_User");
      if (user && user.token) {
        request = request.clone({
          setHeaders: {
            authorization: `Bearer ${user.token}`,
          },
        });
      }
    }
    return next.handle(request);
  }
}

export const JwtInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true,
};
