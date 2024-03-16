import {
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import { NgbdSortableHeader, SortEvent } from "@shared/directives";
import { IBalanceInventory, ITableHeader } from "@shared/interface";
import { SaleRateService } from "@shared/services";
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from "rxjs";

@Component({
  selector: "app-balance-inventory",
  templateUrl: "./balance-inventory.component.html",
})
export class BalanceInventoryComponent implements OnInit, OnDestroy {
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(
    private saleRateService: SaleRateService,
    private spinner: NgxSpinnerService
  ) {}

  inventoryData: IBalanceInventory[] = [];
  tableHeaders: ITableHeader[] = [
    {
      _id: "1",
      accessKey: "categoryName",
      title: "Category Name",
      class: "text-start",
    },
    {
      _id: "2",
      accessKey: "productCode",
      title: "Product Code",
      class: "text-center",
    },
    {
      _id: "3",
      accessKey: "productName",
      title: "Product Name",
      class: "text-start",
    },
    {
      _id: "4",
      accessKey: "quantity",
      title: "Quantity",
      class: "text-center",
    },
  ];
  subscription$: Subscription;
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  search: any = "";
  column: string = "quantity";
  direction: number = 1;
  ngOnInit() {
    this.productWiseQuantity();
  }

  productWiseQuantity(): void {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      column: this.column,
      direction: this.direction,
    };
    this.subscription$ = this.saleRateService
      .productWiseQuantity(params)
      .subscribe((success) => {
        this.inventoryData = success.rows;
        this.collection = success.count;
        this.spinner.hide();
      });
  }
  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.productWiseQuantity();
  }
  trackByFn(index: number, item: any) {
    return item?._id;
  }
  searchFn() {
    this.search.toString().length >= 1 || this.search.toString().length == 0
      ? this.productWiseQuantity()
      : null;
  }
  onSort(data: SortEvent) {
    const { column, direction } = NgbdSortableHeader.onSort(data, this.headers);
    this.column = column;
    this.direction = direction;
    this.productWiseQuantity();
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
