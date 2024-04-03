import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  qty: number = 1;
  constructor(private router: Router, public commonService: CommonService) {}
  product: any[] = [
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/chair.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
    },
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/printer.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
    },
  ];
  payloadData = {
    edit: [],
    delete: [],
  };
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {
    console.log('this.commonService.cartData', this.commonService.cartData);
  }
  deleteVariant(item) {
    this.payloadData.delete.push(item);
  }
  update(){

  }
}
