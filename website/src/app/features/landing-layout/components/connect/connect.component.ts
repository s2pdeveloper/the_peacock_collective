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
  email: string = '';
  constructor(
    private toasterService: ToastrService,
    private customerService: CustomerService
  ) {}
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
}
