import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/core/services';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  showNavigationIndicators = false;
  showNavigationArrows = false;
  user: any;
  data: any = {
    phone: '+48 541 44 27',
    email: 'support@peacockcollective.in',
    address: '66-764 City, Street 23',
    fbLink: '',
    twitterLink: '',
    instaLink: 'www.instagram.com/peacockcollectiveofficial?igsh=MWgzdTlmOWszamppMQ==',
    mapLink:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1708409035190!5m2!1sen!2sus',
  };
  constructor(
    private router: Router,
    private toasterService: ToastrService,
    private customerService: CustomerService,
    private storageService: StorageService
  ) {
    this.user = this.storageService.get('Customer');
  }

  messageForm = new FormGroup({
    customerId: new FormControl(null),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
    ]),
    enquiryMsg: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.messageForm.get('email');
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    try {
      if (this.messageForm.invalid) {
        this.toasterService.error('Please enter required detials');
        return;
      }
      if (!this.user) {
        this.toasterService.error('Please login first.');
        return;
      }
      let payload = this.messageForm.value;
      payload.customerId = this.user?.id;
      this.customerService.enquiryEmail(payload).subscribe((success) => {
        this.toasterService.success('Message sent successfully!!');
        this.messageForm.reset();
      });
    } catch (error) {
      console.log(error);
    }
  }
  ngOnInit(): void {}
}
