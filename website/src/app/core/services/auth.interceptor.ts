import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { environment } from 'src/environments/environment';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  currentRoute: any;
  constructor(
    private router: Router,
    private toast: ToastService,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let user = null;
    // const user = this.storageService.get('userData');
    if (isPlatformBrowser(this._platformId)) {
      user = JSON.parse(localStorage.getItem('Customer'));
    }
    const excludePath = [];

    request = request.clone({
      url: environment.apiEndpoint + request.url,
      ...(user &&
        user?.token && {
          setHeaders: {
            authorization: `Bearer ${user.token}`,
          },
        }),
    });

    return next.handle(request).pipe(
      catchError((errorResponse) => {
        console.log('errorResponse intercept', errorResponse);
        if (errorResponse instanceof HttpErrorResponse) {
          if (errorResponse.status == 401) {
            this.router.navigate(['/auth/login']);
            this.toast.error('Please login first..');
          } else {
            if (errorResponse.error) {
              this.toast.error(errorResponse.error.error);
            }
          }
          
        }
        return throwError(() => errorResponse.error);
      })
    );
  }
}
