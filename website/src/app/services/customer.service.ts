import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { ApiService } from "../core/services";
@Injectable({
    providedIn: "root",
})
export class CustomerService {
    readonly BASE_URL = 'customer'

    constructor(private http: ApiService) { }

    register(payload: any) {
        return this.http
            .post(this.BASE_URL, payload)
            .pipe(map((res: any) => res));
    }
    login(payload: any) {
        return this.http
            .post(this.BASE_URL + '/login', payload)
            .pipe(map((res: any) => res));
    }
    update(id, payload: any) {
        return this.http
            .put(this.BASE_URL + '/' + id, payload)
            .pipe(map((res: any) => res));
    }
    getById(payload: any) {
        return this.http
            .get(this.BASE_URL + '/profile', payload)
            .pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http
            .delete(this.BASE_URL + '/' + id)
            .pipe(map((res: any) => res));
    }
    forgetPass(payload: any) {
        return this.http
            .put(this.BASE_URL + '/forgetPassword', payload)
            .pipe(map((res: any) => res));
    }
    resetPass(payload: any) {
        return this.http
            .post(this.BASE_URL + '/resetPassword', payload)
            .pipe(map((res: any) => res));
    }

}
