import { Location } from "@angular/common";
import { Component, QueryList, ViewChildren } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService } from "@core/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdSortableHeader, SortEvent } from "@shared/directives";
import { ITableHeader } from "@shared/interface";
import { InvoiceService } from "@shared/services/invoice.service";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";

@Component({
  selector: "app-invoice-reports",
  templateUrl: "./product-wise-reports.component.html",
})
export class ProductWiseReportsComponent {
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "quantity";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  products: any = [];
  statusArray: any = ["Generated"];
  isReportTab: any = "";
  totalValue: any = 0;
  tableHeaders: ITableHeader[] = [
    {
      _id: "1",
      accessKey: "productCode",
      title: "Product Code",
      class: "text-center",
    },
    {
      _id: "2",
      accessKey: "productName",
      title: "Product Name",
      class: "text-start",
    },
    {
      _id: "3",
      accessKey: "quantity",
      title: "Quantity",
      class: "text-center",
    },
    {
      _id: "4",
      accessKey: "totalValue",
      title: "Total Price⟨₹⟩",
      class: "text-center",
    },
    {
      _id: "5",
      accessKey: "PPV",
      title: "SMV⟨₹⟩",
      class: "text-center",
    },
  ];
  subscription$: Subscription;
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
        this.getAll();
      } else {
        this.isReportTab = "";
        this.getAll();
      }
    });
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

  getAll() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      column: this.column,
      direction: this.direction,
    };
    this.service.getProductWiseQuantity(params).subscribe((success: any) => {
      this.spinner.hide();
      this.products = success.rows;
      this.collection = success.count;
      this.totalValue = success.totalSum;
    });
  }
  trackByFn(index: number, item: any) {
    return item?._id;
  }

  onSort(data: SortEvent) {
    const { column, direction } = NgbdSortableHeader.onSort(data, this.headers);
    this.column = column;
    this.direction = direction;
    this.getAll();
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
  gpBack() {
    this.location.back();
  }
}
