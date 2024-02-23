import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  qty: number = 1;
  constructor(private router: Router) {}
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
