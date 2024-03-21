import { Component } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { ProductService } from "@shared/services/product.service";
import { VariantsService } from "@shared/services/variants.service";
import { VendorService } from "@shared/services/vendor.service";

@Component({
  selector: "app-variant-form",
  templateUrl: "./variant-form.component.html",
  styleUrls: ["./variant-form.component.scss"],
})
export class VariantFormComponent {
  options = [];
  vendorId: number = null;
  selectedAttr = [];

  variantForm = this.fb.group({
    id: new FormControl(null),
    sku: new FormControl(null, [Validators.required]),
    price: new FormControl(null),
    qty: new FormControl(null),
    productId: new FormControl(null),
  });
  // FORM_ERRORS = [
  //   {
  //     message: "Name is required",
  //     key: "name",
  //   },
  //   {
  //     message: "Company Name is required",
  //     key: "companyName",
  //   },
  //   {
  //     message: "Status is required",
  //     key: "status",
  //   },
  // ];

  attributes = [];

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private variantsService: VariantsService,
    private productService: ProductService,

    private fb: FormBuilder
  ) {}
  get f() {
    return this.variantForm.controls;
  }

  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getProductAttribute(params.id);
        this.f['productId'].setValue(Number(params.id))
        // this.getDataById(params.id);
        // this.vendorId = params.id;
      }
    });
  }
  getProductAttribute(id) {
    this.spinner.show();
    this.productService.getById(id).subscribe((success: any) => {
      console.log("success", success);
      if (
        success?.productWithProdAttributeMap &&
        success?.productWithProdAttributeMap.length
      ) {
        for (const item of success?.productWithProdAttributeMap) {
          this.attributes.push({
            label: item?.ProdAttributeMapWithAttributes?.name,
            value: item.attributeId,
            attributes: item?.ProdAttributeMapWithAttributes.value.map(
              (x) => x.value
            ),
          });
        }
      }
      console.log("this.attributes", this.attributes);

      // this.variantForm.patchValue(success);
      this.spinner.hide();
    });
  }

  submit() {
    console.log(this.variantForm.value);

    // this.submitted = true;
    // if (
    //   this.validationService.checkErrors(this.categoryForm, this.FORM_ERRORS)
    // ) {
    //   return;
    // }

    let formData:any = this.variantForm.value;
    formData.attributeArr = this.selectedAttr;

    if (this.variantForm.value.id) {
      this.update(this.variantForm.value.id, formData);
    } else {
      // formData.delete('id')
      delete formData.id;
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.variantsService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/variant/variant-list"]);
    });
  }

  update(id, formData) {
    this.spinner.show();
    this.variantsService.update(id, formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/variant/variant-list"]);
    });
  }
  getDataById(id) {
    this.spinner.show();
    this.variantsService.getById(id).subscribe((success: any) => {
      this.variantForm.patchValue(success);
      this.spinner.hide();
    });
  }

  back() {
    this.router.navigate(["default/variant/variant-list"]);
  }
  reset() {
    // this.variantForm.reset();
    // if (this.vendorId) {
    //   this.getDataById(this.vendorId);
    // }
  }
  openUrl(url) {
    window.open(url, "_blank");
  }
  onAttrChange(ev: any, id: any) {
    console.log("ev", ev.target.value, "id", id);
    let index = this.selectedAttr.findIndex((x) => x.attrId == id) 
    if (index == -1) {
      this.selectedAttr.push({
        value: ev.target.value,
        attrId: id,
      });
    } else {
      this.selectedAttr[index] = {
        value: ev.target.value,
        attrId: id,
      };
    }
    console.log('this.selectedAttr',this.selectedAttr);
    
  }
}
