import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private toasterService: ToastrService
  ) {
    this.registerForm = this.fb.group({
      socialTitle: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      DOB: new FormControl(null),
    });
  }
  showEye: boolean = true;

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    this.customerService
      .register(this.registerForm.value)
      .subscribe((success: any) => {
        this.toasterService.success(success?.result?.message)
        this.router.navigate(['/auth/login']);
      });
  }
}
