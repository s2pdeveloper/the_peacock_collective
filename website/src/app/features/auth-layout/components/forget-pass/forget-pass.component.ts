import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent {
  constructor(private router: Router) {}
  forgetPassForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit(e: any) {
    e.preventDefault();
    if (!!this.forgetPassForm.value) {
      console.log('Form value', this.forgetPassForm.value);
    }
  }
}
