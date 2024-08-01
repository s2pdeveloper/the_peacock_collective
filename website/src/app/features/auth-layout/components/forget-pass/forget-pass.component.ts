import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../../services/customer.service';
import { ToastService } from 'src/app/core/services';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss'],
})
export class ForgetPassComponent {
  constructor(
    @Inject(CustomerService) private customerService: CustomerService,
    private router: Router,
    private toastService : ToastService
  ) {}
  forgetPassForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    let formData = this.forgetPassForm.value;
    console.log('formData', formData);
    this.customerService
      .forgetPass(this.forgetPassForm.value)
      .subscribe((success) => {
        console.log('success', success);
        this.toastService.success(success?.result?.message)
      });
  }
}
