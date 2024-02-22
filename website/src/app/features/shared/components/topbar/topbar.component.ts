import { Component, TemplateRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  private offcanvasService = inject(NgbOffcanvas);
  private modalService = inject(NgbModal);
  constructor(private router: Router) {}
  openModal(content:TemplateRef<any>,position :any){
    this.offcanvasService
    .open(content, { position: position })
  }
  openSearch(content:TemplateRef<any>){
    this.modalService.open(content, { centered: true ,size: 'xl'});
  }
  qty:number = 1;
  product:any = [
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
