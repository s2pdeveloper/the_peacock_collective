import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { SpinnerService } from "@core/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BespokeService } from "@shared/services/bespoke";
import { OrderService } from "@shared/services/order";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class OrderListComponent {
  page: number = 1;
  pageSize: number = 10;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  data: any = [];
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private orderService: OrderService,
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

  navigateTo(page, id) {
    if (id) {
      this.router.navigate([page], {
        queryParams: { id: id },
      });
    } else {
      this.router.navigate([page]);
    }
  }

  getAll() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      order: true,
    };
    this.orderService.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.data = success.data;
      this.collection = success.count;
    });
  }
}
