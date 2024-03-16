import { Injectable } from "@angular/core";
import { ApiService } from "@core/services";
import { map } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ExpensesService {
  routes: any = {
    create: "expenses/create",
    getAllPath: "expenses/getAll",
    updatePath: (id: string) => `expenses/update/${id}`,
    deletePath: (id: string) => `expenses/delete/${id}`,
    getByIdPath: (id: string) => `expenses/getById/${id}`,
  };

  constructor(private http: ApiService) {}

  create(payload: any) {
    return this.http
      .post(this.routes.create, payload)
      .pipe(map((res: any) => res));
  }

  getAll(params: any) {
    return this.http.get(this.routes.getAllPath, params).pipe(
      map((category: any) => {
        return category;
      })
    );
  }
  updateById(id: any, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }

  deleteById(id: any) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }

  getById(id: any) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
}
