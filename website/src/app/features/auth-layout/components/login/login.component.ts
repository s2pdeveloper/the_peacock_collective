import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  showEye: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  submit(e: any) {
    e.preventDefault();
    if (!!this.loginForm.value) {
      console.log('Form value', this.loginForm.value);
    }
  }
}
