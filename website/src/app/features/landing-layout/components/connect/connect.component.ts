import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent {

  constructor(
    private toasterService: ToastrService,
    private customerService: CustomerService
  ) {}
  messageForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
    ]),
  });
  get email() {
    return this.messageForm.get('email');
  }
  submit() {
    if (this.messageForm.invalid) {
      this.toasterService.error('please enter email first!!');
      return;
    }
    try {
      this.customerService
        .enquiryEmail(this.messageForm.value)
        .subscribe((success) => {
          this.toasterService.success('Sent Successfully!!');
          this.messageForm.reset();
        });
    } catch (error) {
      console.log(error);
    }
  }
}
