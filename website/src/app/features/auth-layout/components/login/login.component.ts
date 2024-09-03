import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService, StorageService } from 'src/app/core/services';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
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
  addressId: Number;

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private spinnerService: SpinnerService,
    private addressService: AddressService,
    private toasterService: ToastrService,
    private commonService: CommonService,
    private cartService: CartService,
  ) {
    this.user = this.storageService.get('Customer');
  }
  addressForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    location: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    pinCode: new FormControl(null, [Validators.required]),
    type: new FormControl('home', [Validators.required]),
    isDefault: new FormControl(false),
  });
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.getAddresses();
    console.log('this.user', this.user);
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  submit() {
    if (this.loginForm.value) {
      this.customerService.login(this.loginForm.value).subscribe(
        (success: any) => { 
          if (success) {
            this.user = success.result;
            this.storageService.set('Customer', success.result);
            this.toasterService.success('Login done Successfully!!!');
            this.getAddresses();
            this.cartService.getAll().subscribe((success) => {
              let count = success.result.rows.reduce((acc, curr) => acc + curr.qty, 0);
              this.commonService.resetCart();
              this.commonService.addToCart(count);
            });
            this.commonService.setLogin()
          }
        },
        (error) => {}
      );
    } else {
      this.toasterService.error('Something went wrong!!');
    }
  }

  getAddresses() {
    if (this.user) {
      this.addressService.getAll().subscribe((success: any) => {
        this.allAddresses = success.result.rows;
      });
    }
  }
  logout() {
    this.user = this.storageService.remove('Customer');
    this.commonService.setLogout();
    this.commonService.resetCart();
  }
  createAddress() {
    if (this.user) {
      this.spinnerService.show();
      if (this.addressForm.invalid) {
        this.spinnerService.hide();
        this.toasterService.error('Please fill required fields!');
        return;
      } else {
        this.showAddressForm = !this.showAddressForm;
        let formData: any = this.addressForm.value;
        formData.customerId = this.user.id;
        this.addressService.create(formData).subscribe((success: any) => {
          this.spinnerService.hide();
          this.getAddresses();
          this.toasterService.success('Address added successfully!!');
        });
      }
    } else {
      this.spinnerService.hide();
      this.toasterService.error('Please login first!!');
    }
  }
  setDefault(id: Number) {
    console.log('id', id);

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
        this.toasterService.success('Address deleted successfully!!');
        this.getAddresses();
      });
    }
  }
}
