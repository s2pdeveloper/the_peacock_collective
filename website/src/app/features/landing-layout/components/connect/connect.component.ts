import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {
  mailForm = new FormGroup({
    email : new FormControl('',[Validators.required])
  })
  submit(){
    if(!!this.mailForm.value){
      console.log('formValue',this.mailForm.value);
      
    }
  }
}
