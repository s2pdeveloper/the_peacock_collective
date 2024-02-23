import { Component, TemplateRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
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
  constructor(private router: Router) {}
  openModal(content: TemplateRef<any>, position: any) {
    this.offcanvasService.open(content, { position: position });
  }

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

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
