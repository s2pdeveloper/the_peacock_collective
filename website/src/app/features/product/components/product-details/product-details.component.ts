import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  constructor(private router: Router) {}
  qty: number = 1;
  tabActive: String = '';
  products: any[] = [
    {
      name: 'Product 1',
      img: '../../../../../assets/products/bag-1.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 2',
      img: '../../../../../assets/products/bag-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 3',
      img: '../../../../../assets/products/bag-3.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 4',
      img: '../../../../../assets/products/bag-4.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 5',
      img: '../../../../../assets/products/bag-1.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 6',
      img: '../../../../../assets/products/bag-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 7',
      img: '../../../../../assets/products/bag-3.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 8',
      img: '../../../../../assets/products/bag-4.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
  ];
  setTabActive(key: any) {
    this.tabActive = key;
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
