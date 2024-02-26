import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-catalogue',
  templateUrl: './brand-catalogue.component.html',
  styleUrls: ['./brand-catalogue.component.scss'],
})
export class BrandCatalogueComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  column: string = 'createdAt';
  direction: number = -1;
  brandName: any = '';
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param: any) => {
      this.brandName = param.brand;
    });
  }
  onChangePage(pageNo: any) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
  }
  getAll() {}
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
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
}
