import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { ApiService } from "@core/services";

@Injectable({
  providedIn: 'root'
})
export class QueryMailService {
  routes:any={
    createPath: "queryMails",
    getAllPath: "queryMails",
    updatePath: (id: string) => `queryMails/${id}`,
    deletePath: (id: string) => `queryMails/${id}`,
    getByIdPath: (id: string) => `queryMails/${id}`,
  }

  constructor(private http: ApiService) {}

  getAll(payload: any) {
    return this.http.get(this.routes.getAllPath, payload)
  }

  create(payload: any){
    return this.http
    .post(this.routes.createPath,payload)
    .pipe(map((res:any)=>res));
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

  getbyId(id: any) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }












}

