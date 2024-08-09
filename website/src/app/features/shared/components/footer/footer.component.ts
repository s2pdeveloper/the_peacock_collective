import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private router = inject(Router);
  constructor(
    private toasterService: ToastrService,
    private customerService: CustomerService
  ) {}
  email: string = '';

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
    if (!this.email) {
      this.toasterService.error('please enter email first!!');
      return;
    }
    try {
      this.customerService
        .enquiryEmail({ email: this.email })
        .subscribe((success) => {
          this.toasterService.success('Sent Successfully!!');
          this.email = '';
        });
    } catch (error) {
      console.log(error);
    }
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
