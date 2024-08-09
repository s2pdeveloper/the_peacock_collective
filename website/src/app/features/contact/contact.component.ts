import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private router: Router,
    private toasterService: ToastrService,
    private customerService: CustomerService
  ) {}
  showNavigationIndicators = false;
  showNavigationArrows = false;
  data: any = {
    phone: '+48 541 44 27',
    email: 'support@peacockcollective.in',
    address: '66-764 City, Street 23',
    fbLink: '',
    twitterLink: '',
    googleLink: '',
    mapLink:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1708409035190!5m2!1sen!2sus',
  };
  messageForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    enquiryMsg: new FormControl('', [Validators.required]),
  });
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    if (this.messageForm.invalid) {
      this.toasterService.error('please fill required fields!!');
      return;
    }
    try {
      this.customerService
        .enquiryEmail(this.messageForm.value)
        .subscribe((success) => {
          this.toasterService.success('Sent Successfully!!');
          this.messageForm.reset()
        });
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {}
}
