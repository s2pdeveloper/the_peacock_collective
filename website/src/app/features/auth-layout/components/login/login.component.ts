import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService, StorageService } from 'src/app/core/services';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Country, State, City } from 'country-state-city';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private storageService = inject(StorageService);
  // countries = Country.getAllCountries();
  countries = [
    {
      name: 'Canada',
      isoCode: 'CA',
      flag: '🇨🇦',
      phonecode: '1',
      currency: 'CAD',
      latitude: '60.00000000',
      longitude: '-95.00000000',
      timezones: [
        {
          zoneName: 'America/Atikokan',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America)',
        },
        {
          zoneName: 'America/Blanc-Sablon',
          gmtOffset: -14400,
          gmtOffsetName: 'UTC-04:00',
          abbreviation: 'AST',
          tzName: 'Atlantic Standard Time',
        },
        {
          zoneName: 'America/Cambridge_Bay',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America)',
        },
        {
          zoneName: 'America/Creston',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America)',
        },
        {
          zoneName: 'America/Dawson',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America)',
        },
        {
          zoneName: 'America/Dawson_Creek',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America)',
        },
        {
          zoneName: 'America/Edmonton',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America)',
        },
        {
          zoneName: 'America/Fort_Nelson',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America)',
        },
        {
          zoneName: 'America/Glace_Bay',
          gmtOffset: -14400,
          gmtOffsetName: 'UTC-04:00',
          abbreviation: 'AST',
          tzName: 'Atlantic Standard Time',
        },
        {
          zoneName: 'America/Goose_Bay',
          gmtOffset: -14400,
          gmtOffsetName: 'UTC-04:00',
          abbreviation: 'AST',
          tzName: 'Atlantic Standard Time',
        },
        {
          zoneName: 'America/Halifax',
          gmtOffset: -14400,
          gmtOffsetName: 'UTC-04:00',
          abbreviation: 'AST',
          tzName: 'Atlantic Standard Time',
        },
        {
          zoneName: 'America/Inuvik',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America',
        },
        {
          zoneName: 'America/Iqaluit',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Moncton',
          gmtOffset: -14400,
          gmtOffsetName: 'UTC-04:00',
          abbreviation: 'AST',
          tzName: 'Atlantic Standard Time',
        },
        {
          zoneName: 'America/Nipigon',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Pangnirtung',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Rainy_River',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Rankin_Inlet',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Regina',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Resolute',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/St_Johns',
          gmtOffset: -12600,
          gmtOffsetName: 'UTC-03:30',
          abbreviation: 'NST',
          tzName: 'Newfoundland Standard Time',
        },
        {
          zoneName: 'America/Swift_Current',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Thunder_Bay',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Toronto',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Vancouver',
          gmtOffset: -28800,
          gmtOffsetName: 'UTC-08:00',
          abbreviation: 'PST',
          tzName: 'Pacific Standard Time (North America',
        },
        {
          zoneName: 'America/Whitehorse',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America',
        },
        {
          zoneName: 'America/Winnipeg',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Yellowknife',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America',
        },
      ],
    },
    {
      name: 'India',
      isoCode: 'IN',
      flag: '🇮🇳',
      phonecode: '91',
      currency: 'INR',
      latitude: '20.00000000',
      longitude: '77.00000000',
      timezones: [
        {
          zoneName: 'Asia/Kolkata',
          gmtOffset: 19800,
          gmtOffsetName: 'UTC+05:30',
          abbreviation: 'IST',
          tzName: 'Indian Standard Time',
        },
      ],
    },
    {
      name: 'United States',
      isoCode: 'US',
      flag: '🇺🇸',
      phonecode: '1',
      currency: 'USD',
      latitude: '38.00000000',
      longitude: '-97.00000000',
      timezones: [
        {
          zoneName: 'America/Adak',
          gmtOffset: -36000,
          gmtOffsetName: 'UTC-10:00',
          abbreviation: 'HST',
          tzName: 'Hawaii–Aleutian Standard Time',
        },
        {
          zoneName: 'America/Anchorage',
          gmtOffset: -32400,
          gmtOffsetName: 'UTC-09:00',
          abbreviation: 'AKST',
          tzName: 'Alaska Standard Time',
        },
        {
          zoneName: 'America/Boise',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America',
        },
        {
          zoneName: 'America/Chicago',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Denver',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America',
        },
        {
          zoneName: 'America/Detroit',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Indiana/Indianapolis',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Indiana/Knox',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Indiana/Marengo',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Indiana/Petersburg',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Indiana/Tell_City',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Indiana/Vevay',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Indiana/Vincennes',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Indiana/Winamac',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Juneau',
          gmtOffset: -32400,
          gmtOffsetName: 'UTC-09:00',
          abbreviation: 'AKST',
          tzName: 'Alaska Standard Time',
        },
        {
          zoneName: 'America/Kentucky/Louisville',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Kentucky/Monticello',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Los_Angeles',
          gmtOffset: -28800,
          gmtOffsetName: 'UTC-08:00',
          abbreviation: 'PST',
          tzName: 'Pacific Standard Time (North America',
        },
        {
          zoneName: 'America/Menominee',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Metlakatla',
          gmtOffset: -32400,
          gmtOffsetName: 'UTC-09:00',
          abbreviation: 'AKST',
          tzName: 'Alaska Standard Time',
        },
        {
          zoneName: 'America/New_York',
          gmtOffset: -18000,
          gmtOffsetName: 'UTC-05:00',
          abbreviation: 'EST',
          tzName: 'Eastern Standard Time (North America',
        },
        {
          zoneName: 'America/Nome',
          gmtOffset: -32400,
          gmtOffsetName: 'UTC-09:00',
          abbreviation: 'AKST',
          tzName: 'Alaska Standard Time',
        },
        {
          zoneName: 'America/North_Dakota/Beulah',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/North_Dakota/Center',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/North_Dakota/New_Salem',
          gmtOffset: -21600,
          gmtOffsetName: 'UTC-06:00',
          abbreviation: 'CST',
          tzName: 'Central Standard Time (North America',
        },
        {
          zoneName: 'America/Phoenix',
          gmtOffset: -25200,
          gmtOffsetName: 'UTC-07:00',
          abbreviation: 'MST',
          tzName: 'Mountain Standard Time (North America',
        },
        {
          zoneName: 'America/Sitka',
          gmtOffset: -32400,
          gmtOffsetName: 'UTC-09:00',
          abbreviation: 'AKST',
          tzName: 'Alaska Standard Time',
        },
        {
          zoneName: 'America/Yakutat',
          gmtOffset: -32400,
          gmtOffsetName: 'UTC-09:00',
          abbreviation: 'AKST',
          tzName: 'Alaska Standard Time',
        },
        {
          zoneName: 'Pacific/Honolulu',
          gmtOffset: -36000,
          gmtOffsetName: 'UTC-10:00',
          abbreviation: 'HST',
          tzName: 'Hawaii–Aleutian Standard Time',
        },
      ],
    },
  ];
  selectedCountryCode: string;
  selectedState: any;
  selectedCity: any;
  selectedCountry: any;
  states: any[] = [];
  cities: any[] = [];
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
    private cartService: CartService
  ) {
    this.user = this.storageService.get('Customer');
  }
  addressForm = new FormGroup({
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
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
    ]),
    password: new FormControl('', [Validators.required]),
  });
  get email() {
    return this.loginForm.get('email');
  }
  ngOnInit(): void {
    this.getAddresses();
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  submit() {
    if (this.loginForm.valid) {
      this.customerService.login(this.loginForm.value).subscribe(
        (success: any) => {
          if (success) {
            this.user = success.result;
            this.storageService.set('Customer', success.result);
            this.toasterService.success('Signed in successfully');
            this.getAddresses();
            this.navigateTo('/');
            this.cartService.getAll().subscribe((success) => {
              let count = success.result.rows.reduce(
                (acc, curr) => acc + curr.qty,
                0
              );
              this.commonService.resetCart();
              this.commonService.addToCart(count);
            });
            this.commonService.setLogin();
          }
        },
        (error) => {}
      );
    } else {
      this.toasterService.error('All fields are required');
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
    this.storageService.remove('noLoginCartProducts')
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
    this.selectedState = data?.state;
    this.selectedCity = data?.city;
     this.selectedCountryCode = this.countries.find(
      (x: any) => x.name == data.country
    )?.isoCode 
    this.states = State?.getStatesOfCountry(this.selectedCountryCode);
    let stateisoCode = this.states.find((x: any) => x.name == data.state);
    this.cities = City?.getCitiesOfState(
      this.selectedCountryCode,
      stateisoCode?.isoCode
    );
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
  onCountryChange(value: any) { 
    console.log("selectedCountry",value);
    this.selectedCountry = value?.name
    this.selectedState = '';
    this.selectedCity = '';
    this.cities = [];
    this.addressForm.controls['state'].setValue('');
    this.addressForm.controls['city'].setValue('');
    this.selectedCountryCode = value?.isoCode;
    this.addressForm.controls['country'].setValue(value?.name);
    this.states = State?.getStatesOfCountry(value?.isoCode);
  }

  onStateChange(value: any) {
    this.selectedState = value?.name;
    this.cities = [];
    this.selectedCity = '';
    this.addressForm.controls['state'].setValue(value?.name);
    this.cities = City?.getCitiesOfState(
      this.selectedCountryCode,
      value?.isoCode
    );
  }
  onCityChange(value: any) {
    this.selectedCity = value?.name;
    this.addressForm.controls['city'].setValue(value?.name);
  }
}
