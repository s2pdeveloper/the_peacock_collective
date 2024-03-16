import { Injectable } from "@angular/core";
import { ApiService } from "@core/services";
import { map } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  routes: any = {
    createProduct: "product/create",
    getAllPath: "product/getAll",
    generateQRPrintDataPath: "product/generateQRPrintData",
    updatePath: (id: string) => `product/update/${id}`,
    deletePath: (id: string) => `product/delete/${id}`,
    getByIdPath: (id: string) => `product/getById/${id}`,
    getAllMasterData: "product/getAllMasterData",
  };

  constructor(private http: ApiService) {}

  createProduct(payload: any) {
    return this.http
      .post(this.routes.createProduct, payload)
      .pipe(map((res: any) => res));
  }

  getAllProduct(params: any) {
    return this.http.get(this.routes.getAllPath, params).pipe(
      map((category: any) => {
        return category;
      })
    );
  }
  generateQRPrintData(params: any) {
    return this.http.get(this.routes.generateQRPrintDataPath, params).pipe(
      map((category: any) => {
        return category;
      })
    );
  }
  updateProductById(id: any, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
  deleteProductById(id: any) {
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
