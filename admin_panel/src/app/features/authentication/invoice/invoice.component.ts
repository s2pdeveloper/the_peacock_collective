import { CommonModule, LocationStrategy } from "@angular/common";
import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { ShopService } from "@shared/services/shop.service";
import { ToWords } from "to-words";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-invoice",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"],
})
export default class InvoiceComponent {
  shopDetail: any = {};
  invoiceData: any = {};
  totalQuantity: number = 0;
  totalSaleRate: number = 0;
  totalLineValue: number = 0;
  totalAppliedGST: number = 0;
  totalValue: number = 0;
  emptyRows = [];
  toWords = new ToWords();
  constructor(
    private activated: ActivatedRoute,
    private spinner: SpinnerService,
    private shopService: ShopService,
    private location: LocationStrategy,
    private title: Title
  ) {}

  ngOnInit(): void {
    const params: any = this.location.getState();

    if (params?.data) {
      this.invoiceData = JSON.parse(params?.data);
      if (this.invoiceData.productDetails.length < 4) {
        let rows = 6 - this.invoiceData.productDetails.length;
        for (let i = 0; i < rows; i++) {
          this.emptyRows.push({});
        }
      }
    }
  }

  getShopDetail() {
    this.spinner.show();
    this.shopService.getById().subscribe((success: any) => {
      this.shopDetail = success;
      this.spinner.hide();
    });
  }

  print() {
    window.print();
  }

  back() {
    this.location.back();
  }
  ngOnDestroy(): void {
    this.title.setTitle("Jhumka Planet");
  }
}
