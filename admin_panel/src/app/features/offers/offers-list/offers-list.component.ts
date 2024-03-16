import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SpinnerService, ToastService } from "@core/services";
import { OffersService } from "@shared/services/offers.service";
@Component({
  selector: "app-offers-list",
  templateUrl: "./offers-list.component.html",
})
export class OffersListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private offersService: OffersService,
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
  offers: any = [];
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
    this.offersService.delete(id).subscribe((success: any) => {
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
    this.offersService.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.offers = success.rows.map((x) => {
        x.products = x.products.map((y) => y.code);
        return x;
      });
      this.collection = success.count;
    });
  }
}
