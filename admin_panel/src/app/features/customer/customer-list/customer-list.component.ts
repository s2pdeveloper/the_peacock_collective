import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SpinnerService, ToastService } from "@core/services";
import { CustomerService } from "@shared/services/customer.service";
@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private customerService: CustomerService,
    private activated: ActivatedRoute,
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
  customer: any = [];
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
    this.customerService.delete(id).subscribe((success: any) => {
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
    this.customerService.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.customer = success.rows;
      this.collection = success.count;
    });
  }
}
