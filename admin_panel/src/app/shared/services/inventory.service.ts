import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class InventoryService {
  routes: any = {
    createPath: "inventory/create",
    getAllPath: "inventory/getAll",
    updatePath: (id: string) => `inventory/update/${id}`,
    deletePath: (id: string) => `inventory/delete/${id}`,
    getByIdPath: (id: string) => `inventory/getById/${id}`,
    getAllMasterData: "inventory/getAllMasterData",
  };

  constructor(private http: ApiService) {}

  getAll(payload: any) {
    return this.http.get(this.routes.getAllPath, payload).pipe(
      map((category: any) => {
        return category;
      })
    );
  }

  getAllMasterData(payload: any) {
    return this.http.get(this.routes.getAllMasterData, payload).pipe(
      map((category: any) => {
        return category;
      })
    );
  }

  create(payload: any) {
    return this.http
      .post(this.routes.createPath, payload)
      .pipe(map((res: any) => res));
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
