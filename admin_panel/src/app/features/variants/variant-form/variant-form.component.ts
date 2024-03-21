import { Component } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { VendorService } from "@shared/services/vendor.service";

@Component({
  selector: 'app-variant-form',
  templateUrl: './variant-form.component.html',
  styleUrls: ['./variant-form.component.scss']
})
export class VariantFormComponent {
  vendorForm = this.fb.group({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    price: new FormControl(null),
    qty: new FormControl(null),
    productId: new FormControl(null),
  });
  options = [];
  vendorId: number = null;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private vendorService: VendorService,
    private fb: FormBuilder
  ) {}
  get f() {
    return this.vendorForm.controls;
  }

  FORM_ERRORS = [
    {
      message: "Name is required",
      key: "name",
    },
    {
      message: "Company Name is required",
      key: "companyName",
    },
    {
      message: "Status is required",
      key: "status",
    },
  ];

  ngOnInit(): void {
    // this.getAllMasterData();
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getDataById(params.id);
        this.vendorId = params.id;
      }
    });
  }

  submit() {
    console.log(this.vendorForm.value);

    // this.submitted = true;
    // if (
    //   this.validationService.checkErrors(this.categoryForm, this.FORM_ERRORS)
    // ) {
    //   return;
    // }

    let formData = this.vendorForm.value;

    if (this.vendorForm.value.id) {
      this.update(this.vendorForm.value.id, formData);
    } else {
      // formData.delete('id')
      delete formData.id;
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.vendorService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/vendor/vendor-list"]);
    });
  }

  update(id, formData) {
    this.spinner.show();
    this.vendorService.update(id, formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/vendor/vendor-list"]);
    });
  }
  getDataById(id) {
    this.spinner.show();
    this.vendorService.getById(id).subscribe((success: any) => {
      this.vendorForm.patchValue(success);
      this.spinner.hide();
    });
  }

  // getByParentId() {
  //   this.spinner.show();
  //   this.categoryService.getParentId().subscribe((success: any) => {
  //     this.spinner.hide();
  //     this.options = success.map((category) => ({
  //       id: category.id,
  //       name: category.name,
  //     }));
  //     let def = { id: "", name: "Parent" };
  //     this.options.unshift(def);
  //   });
  // }

  back() {
    this.router.navigate(["default/vendor/vendor-list"]);
  }
  reset() {
    this.vendorForm.reset();
    if (this.vendorId) {
      this.getDataById(this.vendorId);
    }
  }
  openUrl(url) {
    window.open(url, "_blank");
  }
}
