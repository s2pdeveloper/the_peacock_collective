import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastService } from "@core/services";
import { VariantsService } from "@shared/services/variants.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-all-product-variants",
  templateUrl: "./all-product-variants.component.html",
  styleUrls: ["./all-product-variants.component.scss"],
})
export class AllProductVariantsComponent {
  variants: any[] = [];
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  addQty:number = 0;
  constructor(
    private router: Router,
    private variantService: VariantsService,
    private toastService: ToastService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getAllProductVariant();
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
  update(data: any) {
    let payload = {
      price: data.price,
      qty: data.qty,
    };
    this.spinner.show();
    this.variantService.update(data.id, payload).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
    });
  }
  updateAll() {
    let isNan=false
    let payload = this.variants.filter(x => x?.edit).map(y => {
      if(isNaN(y.addQty)){
        isNan=true
      }
      return {
        id: y.id,
        price: y.price,
        qty: !isNaN(y.addQty) ? (y.qty + y.addQty) : y.qty,
      }
    });
    if(isNan){
      this.toastService.warning("Qty is Not a Number")
      return
    }
    this.spinner.show();
    this.variantService.updateAll(payload).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
    });
  }

  getAllProductVariant() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.variantService
      .getAllProductVariant(params)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.variants = success?.rows;
        // this.collection = success?.count;
      });
  }
  searchFn() {
    this.search.toString().length >= 3 || this.search.toString().length == 0
      ? this.getAllProductVariant()
      : null;
  }
  qtyChange(data: any) {
    console.log("data", data);
    let index = this.variants.map((x) => x.id).indexOf(data.id);
    let balQty = this.variants.find((x) => x.id === data.id)?.qty;
    if (balQty < data.qty) {
      this.toastService.warning(
        "Enter quantity is greater quantity than balanced quantity"
      );
    }
    this.variants[index].qty = Number(data.qty);
  }
  priceChange(data: any) {
    console.log("data", data);
    let index = this.variants.map((x) => x.id).indexOf(data.id);
    let price = this.variants.find((x) => x.id === data.id)?.price;
    this.variants[index].price = Number(data.price);
  }
}
