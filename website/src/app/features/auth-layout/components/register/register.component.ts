import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm:FormGroup;

  constructor(private router: Router,private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      socialTitle: new FormControl(null, [Validators.required]),
      fname: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      isReceivedOffers: new FormControl(),
      isSignUpNewsletter: new FormControl(),
    });
  }
  showEye: boolean = true;

 
   
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
