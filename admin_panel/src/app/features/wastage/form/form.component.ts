import { Component } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { ValidationService } from "@core/components";
import { WastageService } from "@shared/services/wastage.service";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  submitted: boolean = false;
  productOptions: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private activated: ActivatedRoute,
    private service: WastageService,
    private toastService: ToastService
  ) {}

  wastageForm = new FormGroup({
    _id: new FormControl(null),
    productId: new FormControl(null, [Validators.required]),
    quantity: new FormControl(null, [Validators.required]),
    remarks: new FormControl(null),
    saleRates: new FormControl(null),
  });
  get f() {
    return this.wastageForm.controls;
  }
  FORM_ERRORS = [
    {
      message: "Product is Required",
      key: "productId",
    },
    {
      message: "Quantity is Required",
      key: "quantity",
    },
  ];
  ngOnInit(): void {
    this.getAllMasterData();
  }
  getAllMasterData() {
    this.service.getAllMasterData({}).subscribe((success: any) => {
      this.productOptions = success.products;
      this.activated.queryParams.subscribe((params: any) => {
        if (params.id != undefined) {
          this.getDataById(params.id);
        }
      });
    });
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    this.submitted = true;
    if (
      this.validationService.checkErrors(this.wastageForm, this.FORM_ERRORS)
    ) {
      return;
    }

    let formData: any = this.wastageForm.value;
    if (formData._id) {
      this.update(formData);
    } else {
      delete formData._id;
      this.create(formData);
    }
  }
  create(formData) {
    this.spinner.show();
    this.service.createWastage(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/wastage/list"]);
    });
  }
  update(formData) {
    this.spinner.show();
    this.service
      .updateWastageById(formData._id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["/default/wastage/list"]);
      });
  }
  getDataById(id: string) {
    this.spinner.show();
    this.service.getById(id).subscribe((success: any) => {
      if (success.date) {
        success.date = success.date.split("T")[0];
      }
      this.wastageForm.patchValue(success);
      this.spinner.hide();
    });
  }
  reset() {
    this.wastageForm.reset();
  }
}
