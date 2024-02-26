import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private router: Router) {}
  showEye: boolean = true;

  registerForm = new FormGroup({
    socialTitle: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    isReceivedOffers: new FormControl(),
    isSignUpNewsletter: new FormControl(),
  });
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit(e: any) {
    e.preventDefault();
    if (!!this.registerForm.value) {
      console.log('Form value', this.registerForm.value);
    }
  }
}
