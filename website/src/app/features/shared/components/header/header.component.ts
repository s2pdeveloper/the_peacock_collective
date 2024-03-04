import { Component, HostListener, TemplateRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbModal,
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private offcanvasService = inject(NgbOffcanvas);
  searchToggle: boolean = false;
  catBToggle: boolean = false;
  catDToggle: boolean = false;
  shopBToggle: boolean = false;
  shopDToggle: boolean = false;
  qty: number = 1;
  closeResult = '';
  scrollValue: number = 0;


  constructor(private router: Router) {}
  private modalService = inject(NgbModal);
  openModal(content: TemplateRef<any>, position: any) {
    this.offcanvasService.open(content, { position: position });
  }
  openSearch(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, size: 'xl' });
  }


  // Header Dropdown Data
  categories: any[] = [
    {
      name: 'Women',
      img: '../../../../../assets/images/women.jpg',
      subCategories: [
        {
          subName: 'Blouse',
          hasItems: false,
        },
        {
          subName: 'Tops',
          hasItems: true,
          catItems: [{ itemName: 'Tops' }, { itemName: 'T-Shirts' }],
        },
        {
          subName: 'Dresses',
          hasItems: true,
          catItems: [
            { itemName: 'Casual Dresses' },
            { itemName: 'Summer Dresses' },
            { itemName: 'Evening Dresses' },
          ],
        },
        {
          subName: 'Shoes',
          hasItems: false,
        },
        {
          subName: 'Accessories',
          hasItems: false,
        },
        {
          subName: 'Hats',
          hasItems: false,
        },
      ],
    },
    {
      name: 'Women',
      img: '../../../../../assets/images/women.jpg',
      subCategories: [
        {
          subName: 'Blouse',
          hasItems: false,
        },
        {
          subName: 'Tops',
          hasItems: true,
          catItems: [{ itemName: 'Tops' }, { itemName: 'T-Shirts' }],
        },
        {
          subName: 'Dresses',
          hasItems: true,
          catItems: [
            { itemName: 'Casual Dresses' },
            { itemName: 'Summer Dresses' },
            { itemName: 'Evening Dresses' },
          ],
        },
        {
          subName: 'Shoes',
          hasItems: false,
        },
        {
          subName: 'Accessories',
          hasItems: false,
        },
        {
          subName: 'Hats',
          hasItems: false,
        },
      ],
    },
    {
      name: 'Women',
      img: '../../../../../assets/images/women.jpg',
      subCategories: [
        {
          subName: 'Blouse',
          hasItems: false,
        },
        {
          subName: 'Tops',
          hasItems: true,
          catItems: [{ itemName: 'Tops' }, { itemName: 'T-Shirts' }],
        },
        {
          subName: 'Dresses',
          hasItems: true,
          catItems: [
            { itemName: 'Casual Dresses' },
            { itemName: 'Summer Dresses' },
            { itemName: 'Evening Dresses' },
          ],
        },
        {
          subName: 'Shoes',
          hasItems: false,
        },
        {
          subName: 'Accessories',
          hasItems: false,
        },
        {
          subName: 'Hats',
          hasItems: false,
        },
      ],
    },
    {
      name: 'Women',
      img: '../../../../../assets/images/women.jpg',
      subCategories: [
        {
          subName: 'Blouse',
          hasItems: false,
        },
        {
          subName: 'Tops',
          hasItems: true,
          catItems: [{ itemName: 'Tops' }, { itemName: 'T-Shirts' }],
        },
        {
          subName: 'Dresses',
          hasItems: true,
          catItems: [
            { itemName: 'Casual Dresses' },
            { itemName: 'Summer Dresses' },
            { itemName: 'Evening Dresses' },
          ],
        },
        {
          subName: 'Shoes',
          hasItems: false,
        },
        {
          subName: 'Accessories',
          hasItems: false,
        },
        {
          subName: 'Hats',
          hasItems: false,
        },
      ],
    },
  ];
  simple: any[] = [
    {
      name: 'Tops',
      img: '../../../../../assets/products/shoes.jpg',
      subCategories: [
        {
          subName: 'Tops',
          hasItems: false,
        },
        {
          subName: 'T-Shirts',
          hasItems: false,
        },
      ],
    },
  ];
  categoryProducts: any[] = [
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
      name: 'Product 5',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 6',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 7',
      img: '../../../../../assets/images/bride-4.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 8',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 9',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 10',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
  ];
  // Cart Data
  product: any[] = [
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/chair.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
      qty: 5,
      shipCharge: 3.2,
    },
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/printer.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
      qty: 1,
      shipCharge: 3.2,
    },
  ];
  get totalItemPrice() {
    let totalPriceArray = this.product.map((items) => {
      return {
        ...items,
        totalPrice: items.qty * items.price,
      };
    });
    return totalPriceArray.reduce(
      (acc, currValue) => acc + currValue.totalPrice,
      0
    );
  }
  totalShipCharge = this.product.reduce(
    (acc, currValue) => acc + currValue.shipCharge,
    0
  );

  ngOnInit(): void {
    window.addEventListener("wheel", event => {
      this.scrollValue = Math.sign(event.deltaY);
  });
    console.log('scrollValue', this.scrollValue);
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  navigateWithParams(path: any, param: any) {
    this.router.navigate([path], { queryParams: { brand: param } });
  }
}
