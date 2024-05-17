import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { OrderService } from "@shared/services/order";

@Component({
  selector: "app-order-view",
  templateUrl: "./order-view.component.html",
  styleUrls: ["./order-view.component.scss"],
})
export class OrderViewComponent {
  id: number = null;
  data: any = {};
  subtotal: number = 0;
  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private orderService: OrderService,
    private spinner: SpinnerService,
    private toastService: ToastService
  ) {}
  orderForm = new FormGroup({
    total: new FormControl(0),
    discount: new FormControl(null),
    shippingFee: new FormControl(null),
    status: new FormControl("approved", [Validators.required]),
  });
  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      this.id = Number(params?.id);
    });
    this.getData();
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  getData() {
    this.spinner.show();
    try {
      this.orderService.getById(this.id).subscribe((success: any) => {
        this.spinner.hide();
        this.data = success;
        this.orderForm.patchValue(success);
        console.log("this.subtotal11", this.subtotal);

        this.subtotal = this.data.orderWithOrderVariantMap
          .map((x) => x.price)
          .reduce((acc, currentValue) => acc + currentValue, 0);
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  submit() {
    this.spinner.show();
    this.orderService
      .update(this.id, this.orderForm.value)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success?.message);
        this.getData();
      });
  }
  totalChange() {
    let total:any = this.subtotal;
    if (this.orderForm.value.discount) {
      total =
        this.subtotal - (this.orderForm.value.discount / 100) * this.subtotal;
    }
    if (this.orderForm.value.shippingFee) {
      total += this.orderForm.value.shippingFee;
    }
    this.orderForm.controls["total"].setValue(total.toFixed(2));
  }
}
