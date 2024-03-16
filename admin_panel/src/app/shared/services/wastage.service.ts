import { Injectable } from "@angular/core";
import { ApiService } from "@core/services";
import { map } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class WastageService {
  routes: any = {
    createWastage: "wastage/create",
    getAllPath: "wastage/getAll",
    updatePath: (id: string) => `wastage/update/${id}`,
    deletePath: (id: string) => `wastage/delete/${id}`,
    getByIdPath: (id: string) => `wastage/getById/${id}`,
    getAllMasterData: "wastage/getAllMasterData",
  };

  constructor(private http: ApiService) {}

  createWastage(payload: any) {
    return this.http
      .post(this.routes.createWastage, payload)
      .pipe(map((res: any) => res));
  }

  getAllWastage(params: any) {
    return this.http.get(this.routes.getAllPath, params).pipe(
      map((category: any) => {
        return category;
      })
    );
  }

  updateWastageById(id: any, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
  deleteWastageById(id: any) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
  getAllMasterData(payload: any) {
    return this.http.get(this.routes.getAllMasterData, payload).pipe(
      map((category: any) => {
        return category;
      })
    );
  }
  getById(id: any) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
}
