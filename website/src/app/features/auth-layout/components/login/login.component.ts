import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/core/services';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private customerService: CustomerService,
    private toasterService: ToastrService
  ) {}
  private storageService = inject(StorageService);
  showEye: boolean = true;
  user: any;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  submit() {
    this.customerService
      .login(this.loginForm.value)
      .subscribe((success: any) => {
        this.user = success.result;
        this.storageService.set('User', success.result);
        this.toasterService.success('Login done Successfully!!!');
      });
  }
}
