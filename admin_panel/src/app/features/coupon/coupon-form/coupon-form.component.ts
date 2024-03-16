import { Component, Input } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { ValidationService } from "@core/components";
import { CouponService } from "@shared/services/coupon.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { mergeMap, of } from "rxjs";
@Component({
  selector: "app-coupon-form",
  templateUrl: "./coupon-form.component.html",
})
export class CouponFormComponent {
  submitted: boolean = false;
  userId: string = null;
  today: string = new Date().toISOString().split("T")[0];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private activated: ActivatedRoute,
    private couponService: CouponService,
    private toastService: ToastService,
    public modelService: NgbModal
  ) {}

  couponForm = new FormGroup({
    _id: new FormControl(null),
    couponCode: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    discountPercentage: new FormControl(null),
    discountAmount: new FormControl(null),
    expirationDate: new FormControl(null, [Validators.required]),
    status: new FormControl("active"),
  });
  get f() {
    return this.couponForm.controls;
  }
  FORM_ERRORS = [
    {
      message: "Coupon Code is Required",
      key: "couponCode",
    },
    {
      message: "Description is Required",
      key: "description",
    },
    {
      message: "Expiration Date is Required",
      key: "expirationDate",
    },
  ];
  ngOnInit(): void {
    this.getInitialData();
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    this.submitted = true;
    if (this.validationService.checkErrors(this.couponForm, this.FORM_ERRORS)) {
      return;
    }

    let formData: any = this.couponForm.value;
    if (formData._id) {
      delete formData.password;
      this.update(formData);
    } else {
      delete formData._id;
      this.create(formData);
    }
  }
  create(formData) {
    this.spinner.show();
    this.couponService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/coupon/coupon-list"]);
    });
  }
  update(formData) {
    this.spinner.show();
    this.couponService
      .update(formData._id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["/default/coupon/coupon-list"]);
      });
  }
  reset() {
    this.couponForm.reset();
    this.getInitialData();
  }
  getInitialData() {
    this.couponService.getAllMasterData({}).subscribe((success: any) => {
      this.f["couponCode"].setValue(success.couponCode);
      this.activated.queryParams
        .pipe(
          mergeMap((params: any) => {
            if (params.id) {
              return this.couponService.getById(params.id);
            } else {
              return of({});
            }
          })
        )
        .subscribe((success: any) => {
          if (success.expirationDate)
            success.expirationDate = success.expirationDate.split("T")[0];
          this.couponForm.patchValue(success);
        });
    });
  }
}
