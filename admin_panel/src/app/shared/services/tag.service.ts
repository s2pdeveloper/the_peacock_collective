import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { ApiService } from "@core/services";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  routes:any={
    createPath: "tag/addTag",
    getAllPath: "tag/getAll",
    updatePath: (id: string) => `tag/updateTag/${id}`,
    deletePath: (id: string) => `tag/deleteById/${id}`,
    getByIdPath: (id: string) => `tag/getTagById/${id}`,
  }

  constructor(private http: ApiService) {}

  getAllTag(payload: any) {
    return this.http.get(this.routes.getAllPath, payload)
  }

  createTag(payload: any){
    return this.http
    .post(this.routes.createPath,payload)
    .pipe(map((res:any)=>res));
  }

  updateTagById(id: any, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
     
  deleteTagById(id: any) {
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

