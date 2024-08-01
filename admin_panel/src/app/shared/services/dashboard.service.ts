import { Injectable } from "@angular/core";
import { ApiService } from "@core/services";
import { map } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class DashboardService {
  routes: any = {
    getAllPath: "dashboard",
    getDayWiseSalesPath: "dashboard/dayWiseSales",
    todayDataByCurrentDatePath: "dashboard/todayDataByCurrentDate",
    getDashCardStatsPath: "dashboard/getDashCardStats",
  };

  constructor(private http: ApiService) {}

  getAll(params: any) {
    return this.http.get(this.routes.getAllPath, params).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getDayWiseSales(params: any) {
    return this.http
      .get(this.routes.getDayWiseSalesPath, params)
      .pipe(map((res: any) => res));
  }

  getTodayDataByCurrentDate(params: any) {
    return this.http
      .get(this.routes.todayDataByCurrentDatePath, params)
      .pipe(map((res: any) => res));
  }
  getDashCardStats(params: any) {
    return this.http
      .get(this.routes.getDashCardStatsPath, params)
      .pipe(map((res: any) => res));
  }
}
