import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit {
  constructor() {
    this.getProdForSmallProducts();
    this.getProdForMediumProducts();
    this.getProdForLargeProducts();
  }
  smallProducts: any = [];
  mediumProducts: any = [];
  largeProducts: any = [];
  currentIndex=0
  products: any[] = [
    {
      name: 'Product 1',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 2',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 3',
      img: '../../../../../assets/images/bride-4.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 4',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 1',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 2',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 3',
      img: '../../../../../assets/images/bride-4.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 4',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
  ];

  getProdForSmallProducts() {
    let smallProd = [];
    for (const item of this.products) {
      smallProd.push(item);
    }
    smallProd.splice(2, smallProd.length);
    this.smallProducts.push(...smallProd);
    return smallProd;
  }
  getProdForMediumProducts() {
    let mediumProd = [];
    for (const item of this.products) {
      mediumProd.push(item);
    }
    mediumProd.splice(3, mediumProd.length);
    this.mediumProducts.push(...mediumProd);
    return mediumProd;
  }
  getProdForLargeProducts() {
    let largeProd = [];
    for (const item of this.products) {
      largeProd.push(item);
    }
    console.log('largeProd',largeProd);
    
    largeProd.splice(4, largeProd.length);
    this.largeProducts.push(...largeProd);
    return largeProd;
  }

  handleNextSmall() {}
  handlePrevSmall() {}
  handleNextMedium() {}
  handlePrevMedium() {}
  handleNextLarge() {
    this.currentIndex++;

    let newData = [];
    this.largeProducts = [];
    newData.push(this.products);
    newData.splice(this.currentIndex, newData.length);
    for (const item of newData) {
      this.largeProducts.push(...item);
    }
    console.log('this.largeProducts', this.largeProducts);

    return newData;
  }
  handlePrevLarge() {
    this.currentIndex--;

  }

  ngOnInit(): void {
    // this.getProdForSmallProducts();
    // this.getProdForMediumProducts();
    // this.getProdForLargeProducts();
  }
}
