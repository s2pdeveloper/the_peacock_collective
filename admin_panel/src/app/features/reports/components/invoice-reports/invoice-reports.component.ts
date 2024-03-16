import { Location } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService } from "@core/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { InvoiceService } from "@shared/services/invoice.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-invoice-reports",
  templateUrl: "./invoice-reports.component.html",
})
export class InvoiceReportsComponent {
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  products: any = [];
  statusArray: any = ["Generated"];
  isReportTab: any = "";
  constructor(
    private router: Router,
    private service: InvoiceService,
    private spinner: SpinnerService,
    private toastService: ToastrService,
    private actRoute: ActivatedRoute,
    private modalService: NgbModal,
    private location: Location
  ) {}

  updateUser(c: any) {}
  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.isReportTab = params.id;
        this.getAll(["Generated"]);
      } else {
        this.isReportTab = "";
        this.getAll(this.statusArray);
      }
    });
  }
  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAll(this.statusArray);
  }

  searchFn() {
    this.search.toString().length >= 1 || this.search.toString().length == 0
      ? this.getAll(this.statusArray)
      : null;
  }

  getAll(statusArr: any) {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      statusArray: statusArr,
    };
    this.service.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.products = success.rows;
      this.collection = success.count;
    });
  }

  navigateToInvoice(page: string, id: string) {
    this.spinner.show();
    this.service.getInvoiceDetails(id).subscribe((success: any) => {
      this.spinner.hide();
      if (!success) {
        this.toastService.warning("No invoice exists");
        return;
      }
      this.router.navigate([page], {
        state: { data: JSON.stringify(success) },
      });
    });
  }

  gpBack() {
    this.location.back();
  }
}
