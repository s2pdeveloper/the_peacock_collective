import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { ApiService } from "@core/services";

@Injectable({
  providedIn: 'root'
})
export class FavService {
  routes: any = {
    getAllPath : "favourites/getFav",
    updatePath : (id: string) =>`favorites/updateFavorite/${id}`,
    deletePath: (id: string) => `favourites/deleteFav/${id}`,
    getByIdPath: (id: string) => `favourites/getFavoriteById/${id}`,

  }

  constructor(private http: ApiService) { }
  getAllfavorites(payload: any) {
    return this.http.get(this.routes.getAllPath,payload).pipe(
      map((favorite:any)=>{
        return favorite;
      })
    )
  }
  

  updateFavoriteById(id: any, payload: any) {
    return this.http.put(this.routes.updatePath(id),payload)
    .pipe(map((res:any)=>res));
   
  }

  getbyId(id: any) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }

  deleteFavoriteById(id: any) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
}
