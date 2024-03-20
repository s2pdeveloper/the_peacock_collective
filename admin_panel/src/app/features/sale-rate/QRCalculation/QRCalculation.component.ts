import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService } from "@core/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ProductService } from "@shared/services/product.service";
import { ToastrService } from "ngx-toastr";
import { ProductBulkUploadComponent } from "../../product/product-bulk-upload/product-bulk-upload.component";
import { LocationStrategy } from "@angular/common";

@Component({
  selector: "app-QRCalculation",
  templateUrl: "./QRCalculation.component.html",
  styleUrls: ["./QRCalculation.component.scss"],
})
export class QRCalculationComponent implements OnInit {
  totalQuantity: number = 0;
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  products: any = [];
  originProducts: any[] = [];
  dropdownItem: any = [];
  dropdownSelectedItems: any = [];
  left: any = 0;
  right: any = 0;

  private modalService = inject(NgbModal);
  constructor(
    private location: LocationStrategy,
    private router: Router,
    private productService: ProductService,
    private activated: ActivatedRoute,
    private spinner: SpinnerService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    let state: any = this.location.getState();
    this.products = state.products;
    this.dropdownItem = state.products;
    this.collection = this.products.length;
    // this.getAll();
    this.quantityChange();
  }
  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
  }
  trackByFn(index: number, item: any) {
    return item?._id;
  }
  // searchFn() {
  //   this.search.toString().length >= 1 || this.search.toString().length == 0
  //     ? this.getAll()
  //     : null;
  // }
  open(s: any, content: any) {
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }

  getAll() {
    this.spinner.show();
    let params = {};
    this.productService
      .getAll(params)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.products = success.products;
        this.originProducts = success.products;
        this.collection = success.products.length;
      });
  }
  quantityChange() {
    this.totalQuantity = this.products.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
    this.getPageCount();
  }
  navigateTo(page) {
    if (page == "/qr-sheet" || page == "/qr-label") {
      let products = this.products.filter(
        (x) => x.quantity > 0 && JSON.stringify(x).includes(this.search)
      );
      let count = products.reduce(
        (sum: number, product) => sum + product.quantity,
        0
      );
      // if (count > 324) {
      //   this.toastService.warning("You can only print 324 products at a time");
      //   return;
      // }

      this.router.navigate([page], {
        state: {
          products: products.map((x) => {
            const { productId, productCode, saleRate, quantity } = x;
            return { productId, productCode, saleRate, quantity };
          }),
        },
      });
    } else {
      this.router.navigate([page]);
    }
  }
  back() {
    this.location.back();
  }

  applyFilter() {
    let data = this.dropdownItem.filter((x) =>
      this.dropdownSelectedItems.length > 0
        ? this.dropdownSelectedItems.some((y) => x._id == y)
        : x
    );
    this.products = data;
    this.collection = this.products.length;
    this.quantityChange();
  }

  getPageCount() {
    if (this.totalQuantity < 108) {
      this.right = 0;
      return (this.left = 1);
    }

    let a = this.totalQuantity / 108; // Example: 1.01
    this.left = Math.floor(a); // Value before the decimal point
    this.right = Math.round((a % 1) * 100); // Value after the decimal point
    return this.left, this.right;
  }
}
