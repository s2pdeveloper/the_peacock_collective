import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService } from "@core/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ProductService } from "@shared/services/product.service";
import { ToastrService } from "ngx-toastr";
import { ProductBulkUploadComponent } from "../product-bulk-upload/product-bulk-upload.component";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
})
export class ProductListComponent {
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  products: any = [];
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private productService: ProductService,
    private activated: ActivatedRoute,
    private spinner: SpinnerService,
    private toastService: ToastrService
  ) {}

  updateUser(c: any) {}
  ngOnInit(): void {
    this.getAll();
  }
  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAll();
  }

  searchFn() {
    this.search.toString().length >= 1 || this.search.toString().length == 0
      ? this.getAll()
      : null;
  }
  open(s: any, content: any) {
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }
  add() {
    this.router.navigate(["/default/product/product-form"]);
  }
  navigateTo(page, id) {
    if (id) {
      this.router.navigate([page], {
        queryParams: { id: id },
      });
    } else {
      this.router.navigate([page]);
    }
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getProductById(params.id);
      }
    });
  }

  deleteProduct(id: any) {
    this.spinner.show();
    this.productService.deleteProductById(id).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.modalService.dismissAll();
      this.getAll();
    });
  }

  getAll() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.productService.getAllProduct(params).subscribe((success: any) => {
      this.spinner.hide();
      this.products = success.rows;
      this.collection = success.count;
    });
  }

  getProductById(id) {
    this.spinner.show();
    this.productService.getById(id).subscribe((success) => {
      this.spinner.hide();
      this.router.navigate(["/default/product/product-view"], {
        queryParams: { id },
      });
    });
  }

  /**
   * open modal to bulk upload product
   */
  openBulkUpload() {
    const modalRef = this.modalService.open(ProductBulkUploadComponent, {
      centered: true,
      size: "lg",
    });
    modalRef.result.then(
      (result) => {},
      (dismiss) => {
        this.getAll();
      }
    );
  }
}
