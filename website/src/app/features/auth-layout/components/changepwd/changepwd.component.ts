import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from 'src/app/core/services';
import { validateField } from 'src/app/core/services/formValidators';
import { ValidationService } from 'src/app/core/services/validation.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export default class ChangepwdComponent implements OnInit {
  submitted = false;
  changePassword: boolean = false;
  resetPin: number = null;
  id: number = null;
  constructor(
    @Inject(CustomerService) private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private validationService: ValidationService
  ) {}
  chnagePassForm: FormGroup;
  validators = {
    password: {
      required: 'Password is required',
    },
    confirmPassword: {
      required: 'Confirm password is required',
      mustMatch: 'Confirm password is not matched',
    },
  };
  setPwdForm(): void {
    this.chnagePassForm = this.formBuilder.group(
      {
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validator: this.validationService.MustMatch(
          'password',
          'confirmPassword'
        ),
      }
    );
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log('params', params);
      this.resetPin = +params.pin;
      this.id = +params.sub;
    });
    this.setPwdForm();
  }

  get f() {
    return this.chnagePassForm.controls;
  }
  submit() {
    let formData = this.chnagePassForm.value;
    console.log('formData', formData);
    let payload = {
      ...formData,
      resetPin: this.resetPin,
      id: this.id
    };
    console.log('payload',payload);
    
    this.submitted = true;
    if (this.chnagePassForm.invalid) {
      validateField(this.chnagePassForm);
      return;
    } else {
      this.customerService
        .resetPass(payload)
        .subscribe((success) => {
          console.log('success', success);
          this.toastService.success(success?.result?.message)
        });
    }
  }
  formError(field: string) {
    let error = '';
    if (
      this.f[field]?.errors &&
      this.submitted &&
      (this.f[field].dirty || this.f[field].touched)
    ) {
      let key = Object.keys(this.f[field].errors)[0];
      error = this.validators[field][key];
    }
    console.log('error', error);
    return error;
  }
}
