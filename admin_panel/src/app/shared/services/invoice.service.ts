import { Injectable } from "@angular/core";
import { ApiService } from "@core/services";
import { map } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class InvoiceService {
  routes: any = {
    create: "invoice/create",
    getAllPath: "invoice/getAll",
    updatePath: (id: string) => `invoice/update/${id}`,
    updateStatusPath: (id: string) => `invoice/updateStatus/${id}`,
    deletePath: (id: string) => `invoice/delete/${id}`,
    getByIdPath: (id: string) => `invoice/getById/${id}`,
    getInvoiceDetailsPath: (id: string) => `invoice/getInvoiceDetails/${id}`,
    getAllMasterData: "invoice/getAllMasterData",
    productWiseQuantityPath: "invoice/productWiseQuantity",
    categoryWiseSalesPath: "invoice/categoryWiseSales",
    getAllNewPath:"invoice/getAllNew", 

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
  updateStatus(id: any, payload: any) {
    return this.http
      .put(this.routes.updateStatusPath(id), payload)
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
  getInvoiceDetails(id: any) {
    return this.http
      .get(this.routes.getInvoiceDetailsPath(id))
      .pipe(map((res: any) => res));
  }
  getProductWiseQuantity(params: any) {
    return this.http.get(this.routes.productWiseQuantityPath, params).pipe(
      map((category: any) => {
        return category;
      })
    );
  }
  getCategoryWiseSales(params: any) {
    return this.http.get(this.routes.categoryWiseSalesPath, params).pipe(
      map((category: any) => {
        return category;
      })
    );
  }

  getAllNew(params:any){
    return this.http.get(this.routes.getAllNewPath,params).pipe(
      map((data:any)=>{
        return data
      })
    )
  }
  
}
