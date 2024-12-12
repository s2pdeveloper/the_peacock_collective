import { AfterContentInit, ChangeDetectorRef, Component } from '@angular/core';
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
export class RegisterComponent implements AfterContentInit {
  showEye: boolean = true;
  registerForm = new FormGroup({
    socialTitle: new FormControl(null),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    password: new FormControl(null, [Validators.required]),
    DOB: new FormControl(null),
  });
  get email() {
    return this.registerForm.get('email');
  }
  constructor(
    private router: Router,
    private customerService: CustomerService,
    private toasterService: ToastrService,
    private storageService: StorageService
  ) // private cd: ChangeDetectorRef
  { }
  ngAfterContentInit(): void {
    // this.cd.markForCheck()
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    if (this.registerForm.invalid) {
      this.toasterService.error('Please fill required fields!!');
      return;
    } else {
      let formData: any = this.registerForm.value;
      this.customerService.register(formData).subscribe((success: any) => {
        this.toasterService.success(success?.result?.message);
        this.router.navigate(['/auth/login']);
      });

    }
  }
}
