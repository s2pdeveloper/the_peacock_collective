import { Component, TemplateRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  private offcanvasService = inject(NgbOffcanvas);
  private modalService = inject(NgbModal);
  constructor(private router: Router) {}
  openModal(content: TemplateRef<any>, position: any) {
    this.offcanvasService.open(content, { position: position });
  }
  openSearch(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, size: 'xl' });
  }

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

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

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

  deleteItem(){}
}
