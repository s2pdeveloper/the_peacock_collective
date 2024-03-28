import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiService } from "../core/services";
@Injectable({
    providedIn: "root",
})
export class CommonService {
    readonly BASE_URL = 'common'

    constructor(private http: ApiService) { }

    getAllMasterData(payload: any) {
        return this.http
            .get(this.BASE_URL, payload)
            .pipe(map((res: any) => res));
    }


}
