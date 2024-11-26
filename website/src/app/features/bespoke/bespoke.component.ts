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
  countries = Country.getAllCountries();
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
    mobile: new FormControl(null, [
      Validators.pattern(/^([+]\d{2}[ ])?\d{10}$/)
    ]),
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
        }
      }
      this.spinner.show();
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
        return this.toastService.success('Please add files.');
      }
      if (this.files.length) {
        for (const item of this.files) {
          formData.append('image', item.file);
        }
      }
      this.bespokeService.create(formData).subscribe(
        (success) => {
          this.spinner.hide();
          this.reset()
          this.previous(1)
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
  next(count: any) {
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
}
