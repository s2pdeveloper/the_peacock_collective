import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  mailForm = new FormGroup({
    email : new FormControl('',[Validators.required])
  })
  data: any = {
    phone: '+48 541 44 27',
    email: 'info@info.com',
    address: '66-764 City, Street 23',
    fbLink: '',
    twitterLink: '',
    googleLink: '',
    instaLink: '',
    ytLink: '',
    pinterestLink: '',
    vimeoLink: '',
  };
  submit(){
    if(!!this.mailForm.value){
      console.log('formValue',this.mailForm.value);
      
    }
  }
}
