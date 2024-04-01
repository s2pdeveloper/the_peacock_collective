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
  private storageService = inject(StorageService);
  showEye: boolean = true;
  user: any;
  
  constructor(
    private router: Router,
    private customerService: CustomerService,
    private toasterService: ToastrService
  ) {
    this.user = this.storageService.get('Customer');
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  submit() {
    if (this.loginForm.value) {
      this.customerService
        .login(this.loginForm.value)
        .subscribe((success: any) => {
          this.storageService.set('Customer', success.result);
          console.log('Login done Successfully!!!');
          // this.toasterService.success('Login done Successfully!!!');
        });
    } else {
      console.log('Something went wrong!!');
      // this.toasterService.success('Something went wrong!!');
    }
  }
}
