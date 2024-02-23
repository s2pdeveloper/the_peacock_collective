import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(private router: Router) {}
  showEye: boolean = true;
  collapsed: boolean = false;
  collapsedAddress: boolean = true;
  collapsedShipping: boolean = true;
  collapsedPayment: boolean = true;
  collapsedDetails: boolean = true;
  product:any[] = [
    {
      name:'Printed Chiffon Dress',
      img:'../../../../../assets/products/chair.jpg',
      size:'S',
      color:'Yellow',
      price:10.5
    },
    {
      name:'Printed Chiffon Dress',
      img:'../../../../../assets/products/printer.jpg',
      size:'S',
      color:'Yellow',
      price:10.5
    },
  ]
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
