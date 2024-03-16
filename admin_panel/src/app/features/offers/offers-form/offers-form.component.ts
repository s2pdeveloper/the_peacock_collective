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
import { OffersService } from "@shared/services/offers.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { mergeMap, of } from "rxjs";
@Component({
  selector: "app-offers-form",
  templateUrl: "./offers-form.component.html",
})
export class OffersFormComponent {
  submitted: boolean = false;
  userId: string = null;
  today: string = new Date().toISOString().split("T")[0];
  productOptions: any = [];
  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private activated: ActivatedRoute,
    private offersService: OffersService,
    private toastService: ToastService,
    public modelService: NgbModal
  ) {}

  offersForm = new FormGroup({
    _id: new FormControl(null),
    productIds: new FormControl([], [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    discountPercentage: new FormControl(null),
    discountAmount: new FormControl(null),
    expirationDate: new FormControl(null, [Validators.required]),
    status: new FormControl("active"),
  });
  get f() {
    return this.offersForm.controls;
  }
  FORM_ERRORS = [
    {
      message: "Coupon Code is Required",
      key: "title",
    },
    {
      message: "Description is Required",
      key: "productIds",
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
    if (this.validationService.checkErrors(this.offersForm, this.FORM_ERRORS)) {
      return;
    }
    let formData: any = this.offersForm.value;
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
    this.offersService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/offers/offers-list"]);
    });
  }
  update(formData) {
    this.spinner.show();
    this.offersService
      .update(formData._id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["/default/offers/offers-list"]);
      });
  }
  getInitialData() {
    this.offersService.getAllMasterData({}).subscribe((success: any) => {
      this.productOptions = success.products;
      this.activated.queryParams
        .pipe(
          mergeMap((params: any) => {
            if (params.id) {
              return this.offersService.getById(params.id);
            } else {
              return of({});
            }
          })
        )
        .subscribe((success: any) => {
          if (success.expirationDate)
            success.expirationDate = success.expirationDate.split("T")[0];
          this.offersForm.patchValue(success);
        });
    });
  }
  reset() {
    this.offersForm.reset();
    this.getInitialData();
  }
}
