import { Component, inject, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Stepper from 'bs-stepper';
import { SpinnerService, StorageService, ToastService } from 'src/app/core/services';
import { BespokeService } from 'src/app/services/bespoke';

@Component({
  selector: 'app-bespoke',
  templateUrl: './bespoke.component.html',
  styleUrls: ['./bespoke.component.scss'],
})
export class BespokeComponent {
  @ViewChild('attachments') attachment: any;
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

  constructor(
    private domSanitizer: DomSanitizer,
    private toastService: ToastService,
    private bespokeService: BespokeService,
    private spinner: SpinnerService,
    private router: Router
  ) {}

  bespokeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    mobile: new FormControl(null, Validators.required),
    email: new FormControl('', Validators.required),
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
          this.toastService.error('Please fill required fields');
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
      if (this.files.length) {
        for (const item of this.files) {
          formData.append('image', item.file);
        }
      }
      this.bespokeService.create(formData).subscribe((success) => {
        this.spinner.hide();
        console.log('success', success);
        this.toastService.success(success?.result?.message);
      },
      (error) =>{
        this.spinner.hide();
      }
      );
      this.reset();
    } catch (error) {
      this.spinner.hide();
    }
  }
  reset() {
    this.bespokeForm.reset();
    this.files = [];
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {}

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
      if (event.target.files[0].size > 2000000) {
        this.toastService.warning(
          'Unable to upload file of size more than 1MB'
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
}
