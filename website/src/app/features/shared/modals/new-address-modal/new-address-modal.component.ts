import { Component, inject, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Country, State, City } from 'country-state-city';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddressService } from 'src/app/services/address.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { SpinnerService } from 'src/app/core/services';
@Component({
  selector: 'app-new-address-modal',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './new-address-modal.component.html',
  styleUrl: './new-address-modal.component.scss',
})
export class NewAddressModalComponent {
  @Input() user: any;
  modal = inject(NgbActiveModal);
  countries = Country.getAllCountries();
  selectedCountryCode: string;
  selectedState: any;
  selectedCity: any;
  selectedCountry: any;
  states: any[] = [];
  cities: any[] = [];

  constructor(
    private addressService: AddressService,
    private toasterService: ToastrService,
    private spinnerService: SpinnerService
  ) {}

  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    location: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    pinCode: new FormControl(null, [
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6),
    ]),
    type: new FormControl('home', [Validators.required]),
    isDefault: new FormControl(false),
  });

  submit() {
    if (this.form.invalid) {
      this.toasterService.error('Please fill required fields!');
      return;
    } else {
      this.spinnerService.show();
      let formData: any = this.form.value;
      formData.customerId = this.user.id;
      this.addressService.create(formData).subscribe(
        (success: any) => {
          this.spinnerService.hide();
          this.toasterService.success('Address added successfully!!');
          this.hide(true);
        },
        (err: any) => {
          this.spinnerService.hide();
          console.log(err);
        }
      );
    }
  }
  hide(flag:boolean = false) {
    this.modal.close(flag);
  }
  onCountryChange(value: any) {
    this.selectedState = '';
    this.selectedCity = '';
    this.cities = [];
    this.form.controls['state'].setValue('');
    this.form.controls['city'].setValue('');
    this.selectedCountryCode = value?.isoCode;
    this.form.controls['country'].setValue(value?.name);
    this.states = State?.getStatesOfCountry(value?.isoCode);
  }

  onStateChange(value: any) {
    this.selectedState = value?.name;
    this.cities = [];
    this.selectedCity = '';
    this.form.controls['state'].setValue(value?.name);
    this.cities = City?.getCitiesOfState(
      this.selectedCountryCode,
      value?.isoCode
    );
  }
  onCityChange(value: any) {
    this.selectedCity = value?.name;
    this.form.controls['city'].setValue(value?.name);
  }
}
