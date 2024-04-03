import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/core/services';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  showEye: boolean = true;

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private toasterService: ToastrService,
    private storageService: StorageService
  ) {
  }
  registerForm = new FormGroup({
    socialTitle: new FormControl(null),
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null, [
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    password: new FormControl(null),
    DOB: new FormControl(null),
  });

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    if (this.registerForm.value) {
      let formData: any = this.registerForm.value;
      this.customerService.register(formData).subscribe((success: any) => {
        this.toasterService.success(success?.result?.message);
        this.router.navigate(['/auth/login']);
      });
    } else {
      this.toasterService.error('Please fill required fields!!')
    }
  }
}
