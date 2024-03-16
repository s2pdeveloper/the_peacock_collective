import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SpinnerService, ToastService } from "@core/services";
import { CouponService } from "@shared/services/coupon.service";
@Component({
  selector: "app-coupon-list",
  templateUrl: "./coupon-list.component.html",
})
export class CouponListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private couponService: CouponService,
    private spinner: SpinnerService,
    private toastService: ToastService
  ) {}
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  coupon: any = [];
  address: string = "";
  ngOnInit(): void {
    this.getAll();
  }
  navigateTo(page, id) {
    if (id) {
      this.router.navigate([page], {
        queryParams: { id: id },
      });
    } else {
      this.router.navigate([page]);
    }
  }
  open(s: any, content: any) {
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }
  searchFn() {
    this.search.toString().length >= 3 || this.search.toString().length == 0
      ? this.getAll()
      : null;
  }
  delete(id: any) {
    this.spinner.show();
    this.couponService.delete(id).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.modalService.dismissAll();
      this.getAll();
    });
  }
  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAll();
  }
  getAll() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.couponService.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.coupon = success.rows;
      this.collection = success.count;
    });
  }
}
