import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private router = inject(Router);
  constructor() {}

  footerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });
  data: any = {
    phone: '+48 541 44 27',
    email: 'support@peacockcollective.in',
    address: '66-764 City, Street 23',
    fbLink: '',
    twitterLink: '',
    googleLink: '',
    instaLink: '',
    ytLink: '',
    pinterestLink: '',
    vimeoLink: '',
  };
  submit() {
    if (!!this.footerForm.value) {
      console.log('formValue', this.footerForm.value);
    }
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
