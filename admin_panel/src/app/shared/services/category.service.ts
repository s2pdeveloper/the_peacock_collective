import { Injectable } from "@angular/core";
// import { environment } from "src/environments/environment";
// import { Router } from "@angular/router";
import { map } from "rxjs";
import { ApiService } from "@core/services";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  routes: any = {
    createPath: "category/create",
    getAllPath: "category/getAll",
    updatePath: (id: string) => `category/update/${id}`,
    deletePath: (id: string) => `category/delete/${id}`,
    getByIdPath: (id: string) => `category/getById/${id}`,
    getParentIdPath: (id: string) => `category/getCategoryByParentId`,
    getAllMasterData :"category/getAllMasterData"
  };
  // constructor(
  //   private http: HttpClient,
  //   public router: Router
  // ) {}

  
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

  createCategory(payload: any) {
    return this.http
      .post(this.routes.createPath, payload)
      .pipe(map((res: any) => res));
  }

  updateCategoryById(id: any, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
  deleteCategoryById(id: any) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
  getById(id: any) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
  getParentId() {
    return this.http
      .get(this.routes.getParentIdPath())
      .pipe(map((res: any) => res));
  }
}
