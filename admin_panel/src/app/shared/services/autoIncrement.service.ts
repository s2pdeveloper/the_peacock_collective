import { Injectable } from "@angular/core";
import { ApiService } from "@core/services";
import { map } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AutoIncrementService {
  routes: any = {
    getAllPath: "autoIncrement/getAll",
    updatePath: (id: string) => `autoIncrement/update/${id}`,
  };

  constructor(private http: ApiService) {}

  getAll(params: any) {
    return this.http.get(this.routes.getAllPath, params).pipe(
      map((category: any) => {
        return category;
      })
    );
  }
  update(id: any, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
}
