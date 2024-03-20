import { Component, Input, Output, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService } from "@core/services";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProductService } from "@shared/services/product.service";
import { ToastrService } from "ngx-toastr";
import { EventEmitter } from "@angular/core";
import { IInvoiceDetails } from "@shared/interface/product-invoice.interface";

@Component({
  selector: "app-product-model",
  templateUrl: "./product-model.component.html",
  styleUrls: ["./product-model.component.scss"],
})
export class ProductModelComponent {
  @Output() sendData: EventEmitter<any> = new EventEmitter();
  @Input() saleProducts: IInvoiceDetails[] = [];
  @Input() matchingProducts: IInvoiceDetails[] = [];

  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedProducts: IInvoiceDetails = null;

  fileName: any = "";
  url: any = null;
  file: any = null;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.collection = this.saleProducts.length;
    for (const item of this.saleProducts) {
      item.isChecked = this.matchingProducts.some(
        (x: any) => x.productId === item.productId
      );
    }
  }

  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
  }

  searchFn() {
    // this.search.toString().length >= 1 || this.search.toString().length == 0
    //   ? this.getAll()
    //   : null;
  }

  passDataToParent() {
    this.activeModal.close(
      this.saleProducts
        .filter((x: any) => x.isChecked)
        .map((y) => {
          let { saleRates, ...rest } = y;
          return rest;
        })
    );
  }
}
