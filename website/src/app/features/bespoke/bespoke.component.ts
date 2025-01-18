import { Component, inject, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Stepper from 'bs-stepper';
import {
  SpinnerService,
  StorageService,
  ToastService,
} from 'src/app/core/services';
import { BespokeService } from 'src/app/services/bespoke';
import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-bespoke',
  templateUrl: './bespoke.component.html',
  styleUrls: ['./bespoke.component.scss'],
})
export class BespokeComponent {
  @ViewChild('attachments') attachment: any;
  countries: any[] = [
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
  storage = inject(StorageService);
  fileName: any = '';
  url: any = null;
  files: {
    file: File;
    url: any;
  }[] = [];
  isOther: boolean = false;
  otherCategory: any = null;
  jewelryOption: any[] = [
    {
      label: 'Yes',
      value: 'Yes',
    },
    {
      label: 'No, Not sure yet',
      value: 'No, Not sure yet',
    },
  ];
  selectedState: any;
  selectedCity: any;
  states: any[] = [];
  cities: any[] = [];
  selectedCountryCode: string;
  today: string;
  constructor(
    private domSanitizer: DomSanitizer,
    private toastService: ToastService,
    private bespokeService: BespokeService,
    private spinner: SpinnerService,
    private router: Router
  ) {
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
  }

  bespokeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    mobile: new FormControl(null, [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
    ]),
    fromDate: new FormControl('', Validators.required),
    toDate: new FormControl('', Validators.required),
    eventOutfit: new FormControl('', Validators.required),
    category: new FormControl('bridal'),
    jewelryOption: new FormControl(this.jewelryOption[0].label),
  });

  submit() {
    try {
      let token = this.storage.get('jSessionId') ?? '';
      if (token) {
        if (this.bespokeForm.invalid) {
          this.toastService.error('Please fill corrected data.');
          return;
        }
      }
      let formData: FormData = new FormData();
      if (this.isOther) {
        this.bespokeForm.controls['category'].setValue(this.otherCategory);
      }
      for (const key in this.bespokeForm.value) {
        if (this.bespokeForm.value[key]) {
          formData.append(key, this.bespokeForm.value[key]);
        }
      }
      if (!this.files.length) {
        return this.toastService.error('Please add files.');
      }
      if (this.files.length) {
        for (const item of this.files) {
          formData.append('image', item.file);
        }
      }
      this.spinner.show();
      this.bespokeService.create(formData).subscribe(
        (success) => {
          this.spinner.hide();
          this.reset();
          this.previous(1);
          this.toastService.success(
            'Thank you for reaching out! Our team will respond shortly.'
          );
        },
        (error) => {
          this.spinner.hide();
        }
      );
      // this.spinner.hide();
      // this.reset();
    } catch (error) {
      this.spinner.hide();
    }
  }
  reset() {
    this.bespokeForm.reset({
      name: '',
      city: '',
      country: '',
      state: '',
      mobile: null,
      email: '',
      fromDate: '',
      toDate: '',
      eventOutfit: '',
      category: 'bridal', // Default value
      jewelryOption: this.jewelryOption[0].label, // Default value
    });
    this.previous(1);
    // this.files = [];
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {
    this.bespokeForm.get('fromDate')?.valueChanges.subscribe((fromDate) => {
      const toDateControl = this.bespokeForm.get('toDate');
      if (fromDate) {
        // Set minimum value for toDate
        toDateControl?.setValidators([
          Validators.required,
          this.minDateValidator(new Date(fromDate)),
        ]);
        toDateControl?.updateValueAndValidity();
      }
    });
  }

  onCategoryChange(ev: any) {
    if (ev.target.value == 'other') {
      this.isOther = true;
    } else {
      this.isOther = false;
    }
  }
  imageDelete() {
    if (this.files.length) {
      this.files = [];
      this.attachment.nativeElement.value = '';
    }
  }
  openUrl(url) {
    window.open(url, '_blank');
  }

  fileChosen(event: any) {
    // this.files=[]
    if (event.target.files.length) {
      if (event.target.files[0].size > 5500000) {
        this.toastService.warning(
          'Unable to upload file of size more than 5MB'
        );
        return;
      }

      for (let file of event.target.files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let base64: any = reader.result;
          let url = this.domSanitizer.bypassSecurityTrustUrl(base64);
          this.files.push({
            file: file,
            url: url,
          });
        };
        reader.onerror = (error) => {
          console.error(error);
        };
      }
    }
  }
  next(count: Number) {
    if (count === 2) {
      const requiredFields = [
        'name',
        'mobile',
        'email',
        'country',
        'state',
        'city',
      ];
      const allFieldsValid = requiredFields.every(
        (field) => this.bespokeForm.get(field)?.valid
      );
      if (!allFieldsValid) {
        return this.toastService.error('All fields are required.');
      } else {
        let options = {
          linear: true,
          animation: true,
          selectors: {
            steps: '.step',
            trigger: '.step-trigger',
            stepper: '.bs-stepper',
          },
        };
        let step: any = new Stepper(
          document.querySelector('.bs-stepper'),
          options
        );
        step.to(count);
      }
    }
    if (count === 3) {
      const requiredFields = [
        'fromDate',
        'toDate',
        'eventOutfit',
        'category',
        'jewelryOption',
      ];
      const allFieldsValid = requiredFields.every(
        (field) => this.bespokeForm.get(field)?.valid
      );
      if (!allFieldsValid) {
        return this.toastService.error('All fields are required.');
      } else {
        let options = {
          linear: true,
          animation: true,
          selectors: {
            steps: '.step',
            trigger: '.step-trigger',
            stepper: '.bs-stepper',
          },
        };
        let step: any = new Stepper(
          document.querySelector('.bs-stepper'),
          options
        );
        step.to(count);
      }
    }
    // let options = {
    //   linear: true,
    //   animation: true,
    //   selectors: {
    //     steps: '.step',
    //     trigger: '.step-trigger',
    //     stepper: '.bs-stepper',
    //   },
    // };
    // let step: any = new Stepper(
    //   document.querySelector('.bs-stepper'),
    //   options
    // );
    // step.to(count);
  }

  previous(count: any) {
    let options = {
      linear: true,
      animation: true,
      selectors: {
        steps: '.step',
        trigger: '.step-trigger',
        stepper: '.bs-stepper',
      },
    };
    let step: any = new Stepper(document.querySelector('.bs-stepper'), options);
    step.to(count);
  }
  get email() {
    return this.bespokeForm.get('email');
  }
  get mobile() {
    return this.bespokeForm.get('mobile');
  }

  onCountryChange(value: any) {
    this.selectedState = '';
    this.selectedCity = '';
    this.cities = [];
    this.bespokeForm.controls['state'].setValue('');
    this.bespokeForm.controls['city'].setValue('');
    this.selectedCountryCode = value?.isoCode;
    this.bespokeForm.controls['country'].setValue(value?.name);
    this.states = State?.getStatesOfCountry(value?.isoCode);
  }

  onStateChange(value: any) {
    this.selectedState = value?.name;
    this.cities = [];
    this.bespokeForm.controls['state'].setValue(value?.name);
    this.cities = City?.getCitiesOfState(
      this.selectedCountryCode,
      value?.isoCode
    );
  }
  onCityChange(value: any) {
    this.selectedCity = value?.name;
    this.bespokeForm.controls['city'].setValue(value?.name);
  }
  minDateValidator(minDate: Date) {
    return (control: FormControl) => {
      const selectedDate = new Date(control.value);
      return selectedDate >= minDate
        ? null
        : { minDate: { valid: false, requiredMinDate: minDate } };
    };
  }
  allowNumbersOnly(event: any): void {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}
