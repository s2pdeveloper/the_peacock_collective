import { Injectable } from "@angular/core";
import { HttpBackend, HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { map, catchError } from "rxjs/operators";
import { Observable, ObservableInput, throwError } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class UploadService {
  currentUser: any;
  private httpClient: HttpClient;

  constructor(
    private authService: AuthService,
    handler: HttpBackend
  ) {
    this.httpClient = new HttpClient(handler);
    this.currentUser = this.authService.getUser();
  }

  /**
   * check the file size
   * @param file
   * @returns
   */
  checkFileSize(file) {
    let size = file.size / (1024 * 1024);
    // if (size < OPTIONS.maxLimit) {
    if (size < 5) {
      return true;
    }
    return false;
  }

  /**
   * check upload file type
   * @param file
   * @returns
   */
  checkFileType(file) {
    let types = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      ".csv",
      "text/csv",
    ];
    if (types.includes(file.type)) {
      return true;
    }

    return false;
  }

  /**
   * upload product in bulk
   * @param formData
   * @returns
   */
  uploadBulkProduct(formData: any): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.currentUser.token}`,
        Accept: "application/json",
        enctype: "multipart/form-data",
      }),
    };
    let path = `product/updateProductByFile`;
    return this.httpClient
      .post(`${environment.baseUrl}${path}`, formData, httpHeaders)
      .pipe(
        catchError((error: any) => {
          return this.formatErrors(error);
        }),
        map((data: any) => {
          if (data && data.result) {
            return data.result;
          } else {
            return null;
          }
        })
      );
  }

  private formatErrors(error: any): ObservableInput<any> {
    console.error("Error in API call:", error);
    return throwError("Something went wrong. Please try again later.");
  }
}
