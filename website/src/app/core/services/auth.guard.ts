import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "./local-storage.service";

export const authGuard = () => {
    const storage = inject(StorageService);
    const router = inject(Router);
    let token = storage.get('jSessionId') ?? '';
    if (token) {
        return true;
    } else {
        router.navigateByUrl('auth/login');
        return false;
    }
};