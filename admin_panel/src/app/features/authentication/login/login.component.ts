// angular import
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "@shared/services/auth.service";
import { SpinnerService, StorageService, ToastService } from "@core/services";
import { ValidationService } from "@core/components";
@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
})
export default class LoginComponent {
  findFormErrors = [
    {
      message: "Email Address is required",
      key: "email",
    },
    {
      message: "Password is required",
      key: "password",
    },
  ];
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private storageService: StorageService,
    private validationService: ValidationService
  ) { }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  login() {
    if (
      this.validationService.checkErrors(this.loginForm, this.findFormErrors)
    ) {
      return;
    }
    // this.spinner.show();
    this.authService.login(this.loginForm.value).subscribe((success) => {
      console.log("success", success);
      this.toastService.success('Login Successfully')
      this.storageService.set("Inv_Bill_User", success);
      // this.spinner.hide();
      let route = "./default";

      this.router.navigate([route]);
      this.toastService.success(success.message);
    });
  }
}
