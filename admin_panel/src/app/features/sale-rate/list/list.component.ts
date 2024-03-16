import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ValidationService } from "@core/components";
import { SpinnerService, ToastService } from "@core/services";
import { SaleRateService } from "@shared/services/saleRate.service";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  submitted: boolean = false;
  isPreview: boolean = false;
  search: any = "";
  selectedRow: any;
  allData: any = [];
  originalData: any = [];
  batchOptions: any = [];
  constructor(
    private router: Router,
    private saleRateService: SaleRateService,
    private spinner: SpinnerService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.getAllMasterData();
  }

  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    // this.getAll();
  }

  searchFn() {
    this.search.toString().length >= 3 || this.search.toString().length == 0
      ? this.getAllMasterData()
      : null;
  }
  navigateTo(page) {
    this.router.navigate([page], {
      state: {
        products: this.allData.filter(
          (x) => x.quantity > 0 && JSON.stringify(x).includes(this.search)
        ),
      },
    });
  }
  getAllMasterData() {
    this.spinner.show();
    this.saleRateService.getAllMasterData({}).subscribe((success: any) => {
      this.spinner.hide();
      this.allData = success.inventory.map((data) => {
        data.originalSaleRate = data.saleRate;
        data.originalDiscount = data.discount;
        return data;
      });
      this.originalData = this.allData;
      this.batchOptions = success.batchOptions;
      this.collection = this.allData.length;
    });
  }
  filterData(ev) {
    if (ev.length) {
      this.allData = this.originalData.filter((data) =>
        ev.some((x) => data.inventoryId == x.inventoryId)
      );
      this.page = 1;
      this.collection = this.allData.length;
    } else {
      this.allData = this.originalData;
      this.page = 1;
      this.collection = this.allData.length;
    }
  }
  setSalePrice(element: any) {
    this.allData;
    let index = this.allData.map((x: any) => x._id).indexOf(element._id);
    this.allData[index].salePrice = Number(
      (
        +element.saleRate -
        (+element.saleRate * +element.discount) / 100
      ).toFixed(2)
    );
  }
  onSubmit() {
    this.submitted = true;
    this.allData = this.allData.filter(
      (x: any) =>
        x.salePrice > 0 &&
        (x.saleRate != x.originalSaleRate || x.originalDiscount != x.discount)
    );
    this.page = 1;
    this.collection = this.allData.length;
    if (this.allData.length == 0) {
      this.toastService.warning("At least One Row is Required");
      return;
    }
    this.spinner.show();
    this.saleRateService.create(this.allData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.getAllMasterData();
    });
  }

  resetForm() {
    this.isPreview = false;
    this.allData = [];
    this.collection = this.allData.length;
    this.getAllMasterData();
  }
  preview() {
    this.search = "";
    this.allData = this.allData.filter((x: any) => x.salePrice > 0);
    if (this.allData.length > 0) {
      this.isPreview = true;
    } else {
      this.toastService.warning("At least One Row is Required");
      this.isPreview = false;
    }
    this.collection = this.allData.length;
  }
}
