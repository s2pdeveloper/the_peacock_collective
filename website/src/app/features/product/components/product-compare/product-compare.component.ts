import { Component } from '@angular/core';

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.scss']
})
export class ProductCompareComponent {
  products: any[] = [
    {
      name: 'Product 1',
      img: '../../../../../assets/products/chair.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 2',
      img: '../../../../../assets/products/bag-1.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 3',
      img: '../../../../../assets/products/bag-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 4',
      img: '../../../../../assets/products/bag-3.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 5',
      img: '../../../../../assets/products/bag-4.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 6',
      img: '../../../../../assets/products/bag-5.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 7',
      img: '../../../../../assets/products/printer.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 8',
      img: '../../../../../assets/products/chair.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
  ];
}
