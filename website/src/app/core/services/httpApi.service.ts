import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public get(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.httpClient.get(path, { params }).pipe(map((res: any) => res));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient.put(path, body).pipe(map((res: any) => res));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient.post(path, body).pipe(map((res: any) => res));
  }

  public delete(path: string): Observable<any> {
    return this.httpClient.delete(path).pipe(map((res: any) => res));
  }

  public getFile(path: string) {
    return this.httpClient.get(path, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
    });
  }
}
