import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private router: Router) {}
  showNavigationIndicators = false;
  showNavigationArrows = false;
  data: any = {
    phone: '+48 541 44 27',
    mail: 'info@info.com',
    address: '66-764 City, Street 23',
    fbLink: '',
    twitterLink: '',
    googleLink: '',
  };
  messageForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    query: new FormControl('', [Validators.required]),
  });
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit(e:any){
    e.preventDefault();
    if(!!this.messageForm.value){
      console.log('this.messageForm.value',this.messageForm.value);
      
    }
  }
}
