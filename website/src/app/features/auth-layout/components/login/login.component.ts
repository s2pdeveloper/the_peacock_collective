import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService, StorageService } from 'src/app/core/services';
import { AddressService } from 'src/app/services/address.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private storageService = inject(StorageService);
  showEye: boolean = true;
  show: boolean = true;
  showAddressForm: boolean = false;
  allAddresses: any[] = [];
  user: any;
  showMenuIndex: Number = null;
  addressId: Number;

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private spinnerService: SpinnerService,
    private addressService: AddressService,
    private toasterService: ToastrService
  ) {
    this.user = this.storageService.get('Customer');
  }
  addressForm = new FormGroup({
    name: new FormControl(null),
    location: new FormControl(null),
    country: new FormControl(null),
    state: new FormControl(null),
    city: new FormControl(null),
    pinCode: new FormControl(null),
    type: new FormControl(null),
    isDefault: new FormControl(null),
  });
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.getAddresses();
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  submit() {
    if (this.loginForm.value) {
      this.customerService
        .login(this.loginForm.value)
        .subscribe((success: any) => {
          this.user = success.result;
          this.storageService.set('Customer', success.result);
          this.toasterService.success('Login done Successfully!!!');
          this.getAddresses();
        });
    } else {
      this.toasterService.error('Something went wrong!!');
    }
  }
  getAddresses() {
    if (this.user) {
      this.addressService
        .getByCustomerId(this.user.id)
        .subscribe((success: any) => {
          this.allAddresses = success.result.rows;
        });
    }
  }
  createAddress() {
    if (this.user) {
      this.spinnerService.show();
      this.showAddressForm = !this.showAddressForm;
      if (this.addressForm.value) {
        let formData: any = this.addressForm.value;
        formData.customerId = this.user.id;
        this.addressService.create(formData).subscribe((success: any) => {
          this.spinnerService.hide();
          this.getAddresses();
          this.toasterService.success('Address added successfully!!');
        });
      } else {
        this.spinnerService.hide();
        this.toasterService.error('Please fill required fields!');
      }
    } else {
      this.spinnerService.hide();
      this.toasterService.error('Please login first!!');
    }
  }
  setDefault(id: Number) {
    if (this.allAddresses.length > 0) {
      this.spinnerService.show();
      let payload = {
        customerId: this.user.id,
        addressId: id,
      };
      this.addressService.makeDefault(payload).subscribe((success) => {
        this.toasterService.success('Address default set successfully!!');
        this.spinnerService.hide();
        this.getAddresses();
      });
    }
  }
  edit(data: any) {
    this.addressId = data.id;
    this.showAddressForm = !this.showAddressForm;
    this.addressForm.patchValue(data);
  }
  update() {
    if (this.user) {
      let formData: any = this.addressForm.value;
      formData.customerId = this.user.id;
      this.addressService
        .update(this.addressId, formData)
        .subscribe((success: any) => {
          this.showMenuIndex = null;
          this.showAddressForm = !this.showAddressForm;
          this.toasterService.success('Address update successfully!!');
          this.getAddresses();
        });
    }
  }
  deleteAdd(id: any) {
    if (this.user) {
      let formData: any = this.addressForm.value;
      formData.customerId = this.user.id;
      this.addressService.delete(id).subscribe((success: any) => {
        this.showMenuIndex = null;
        this.toasterService.success('Address deleted successfully!!');
        this.getAddresses();
      });
    }
  }
}
