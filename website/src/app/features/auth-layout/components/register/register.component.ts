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
  showEye: boolean = true;
  showMenu: boolean = true;
  showAddressForm: boolean = false;
  allAddresses: any[] = [
    {
      name: 'Ayush Amnerkar',
      location: 'ayush ayush',
      mobile: 9096594971,
      id: 1,
      type: 'Work',
      country: 'India',
      state: 'Maharashtra',
      city: 'Nagpur',
      pinCode: 440017,
      isDefault:false
    }
  ];

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
      mobile: new FormControl(null, [
        Validators.maxLength(10),
        Validators.minLength(10),
      ]),
      password: new FormControl(null),
      DOB: new FormControl(null),
    });
  }
  addressForm = new FormGroup({
    name: new FormControl(null),
    location: new FormControl(null),
    country: new FormControl(null),
    state: new FormControl(null),
    city: new FormControl(null),
    pinCode: new FormControl(null),
    type: new FormControl(null),
  });

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    this.customerService
      .register(this.registerForm.value)
      .subscribe((success: any) => {
        this.toasterService.success(success?.result?.message);
        this.router.navigate(['/auth/login']);
      });
  }
  edit(data: any) {
    console.log('id', data.id);
    this.showAddressForm = !this.showAddressForm;
    this.addressForm.patchValue(data);
  }
  deleteAdd(id: any) {}
}
