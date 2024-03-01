import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  constructor(private router: Router) {}
  searchToggle: boolean = false;
  page: number = 1;
  pageSize: number = 8;
  collection: any = [];
  value: number = 0;
  highValue: number = 100;
  colors: any[] = [];
  largeProducts: any[] = [];
  options: Options = {
    floor: 0,
    ceil: 100,
  };
  products: any[] = [
    {
      name: 'Product 1',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f5f5dc',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 2',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f5f5dc',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 3',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fff',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 4',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fff',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 5',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#434a54',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 6',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#434a54',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 7',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f39c11',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 8',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f39c11',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 9',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#5d9cec',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 10',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#5d9cec',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 11',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#a0d468',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 12',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#a0d468',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 13',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f1c40f',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 14',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f1c40f',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 15',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fccacd',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 16',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fccacd',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 17',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f5f5dc',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 18',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fff',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 19',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#434a54',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 20',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f39c11',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 21',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#5d9cec',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 22',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#a0d468',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 23',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f1c40f',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
    {
      name: 'Product 24',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fccacd',
      compositions: '',
      style: '',
      property: '',
      brand: '',
    },
  ];
  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.large();

    const paginationNumbers = this.calculatePagination(
      this.products.length,
      this.pageSize
    );
    this.collection.push(...paginationNumbers);
    this.colors = this.products.map((x) => x.color);
    console.log('colorsssss', this.colors);
  }
  pagination(action: any) {
    if (action == 'sub') {
      if (this.page > 1) {
        this.page--;
        this.large();
      }
    } else this.page++;
    this.large();
  }
  large() {
    let offset = (this.page - 1) * this.pageSize;
    this.largeProducts = this.products.slice(offset, this.pageSize + offset);
  }
  calculatePagination(totalProducts: any, productsPerPage: any) {
    const pages = Math.ceil(totalProducts / productsPerPage);
    const paginationNumbers = [];

    for (let i = 1; i <= pages; i++) {
      paginationNumbers.push(i);
    }

    return paginationNumbers;
  }
  colorFilter(color: String) {
    console.log('color', color);
    this.largeProducts = this.products.filter((x) => x.color == color);
  }
}
