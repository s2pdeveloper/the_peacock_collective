import { Injectable } from '@angular/core';
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

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  currentRoute: any;
  constructor(
    private router: Router,
    private toast: ToastService,

  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // const user = this.storageService.get('userData');
    const user = JSON.parse(localStorage.getItem('userData'));
    const excludePath = [

    ]



    request = request.clone({
      url: environment.apiEndpoint + request.url,
      ...((user && user?.token) && {
        setHeaders: {
          authorization: `Bearer ${user.token}`,
        },
      })
    });

    return next.handle(request).pipe(
      catchError((errorResponse) => {
        console.log('errorResponse intercept', errorResponse);
        if (errorResponse instanceof HttpErrorResponse) {
          if (errorResponse.status == 401) {
            this.router.navigate(['/login']);
            this.toast.error("Unautherise request")
          }
        }
        return throwError(() => errorResponse.error);
      })
    );
  }
}
