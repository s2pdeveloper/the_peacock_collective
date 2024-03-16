import { Injectable } from "@angular/core";
import { ApiService } from "@core/services";
import { map } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class SaleRateService {
  routes: any = {
    create : "saleRate/create",
    getAllPath: "saleRate/getAll",
    updatePath: (id: string) => `saleRate/update/${id}`,
    deletePath: (id: string) => `saleRate/delete/${id}`,
    getByIdPath: (id: string) => `saleRate/getById/${id}`,
    getAllMasterData :"saleRate/getAllMasterData",

    productWiseQuantity: "saleRate/productWiseQuantity",
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

  productWiseQuantity(params: any) {
    return this.http.get(this.routes.productWiseQuantity, params).pipe(
      map((category: any) => {
        return category;
      })
    );
  }

}
