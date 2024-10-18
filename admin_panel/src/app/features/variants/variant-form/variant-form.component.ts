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
  productId: number = null;
  selectedAttr = [];
  variantList: any = [];
  attributes = [];
  isEdit: boolean = false;
  variantForm = this.fb.group({
    id: new FormControl(null),
    sku: new FormControl(null, [Validators.required]),
    price: new FormControl(null),
    qty: new FormControl(null),
    productId: new FormControl(null),
    description: new FormControl(''),
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

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private variantsService: VariantsService,
    private productService: ProductService,

    private fb: FormBuilder
  ) { }
  get f() {
    return this.variantForm.controls;
  }

  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getProductAttribute(params.id);
        this.f["productId"].setValue(Number(params.id));
        // this.getDataById(params.id);
        this.productId = params.id;
        this.getAll();
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
            attrId: item.attributeId,
            attributes: item?.ProdAttributeMapWithAttributes.value.map(
              (x) => x.value
            ),
            selectedValue: null
          });
        }
      }
      console.log("this.attributes", this.attributes);

      // this.variantForm.patchValue(success);
      this.spinner.hide();
    });
  }
  getAll() {
    this.spinner.show();
    this.variantsService
      .getByProductId(this.productId)
      .subscribe((success: any) => {
        console.log("success,", success);
        this.variantList = success;
        console.log("this.variantList", this.variantList);
        this.spinner.hide();
      });
  }


  createPayload() {
    let formData: any = this.variantForm.value;
    // let attributeCopy = structuredClone(this.attributes);
    // console.log("attributeCopy", attributeCopy);

    formData.attributeArr = this.attributes.map(x => {
      return {
        value: x.selectedValue,
        attrId: x.attrId,
        label: x.label,
      }
    })
    return formData

  }
  checkDuplicateAttrVariant() {

    for (const item of this.variantList) {
      if (item.sku.toLowerCase() == this.variantForm.value.sku.toLowerCase()) {
        this.toastService.error('duplicate sku')
        return true;
      }
      // if (
      //   item.variantWithAttrVariantMap.length &&
      //   item.variantWithAttrVariantMap.every((x) =>
      //     this.attributes.some((y) => y.selectedValue == x.value)
      //   )
      // ) {
      //   this.toastService.error('duplicate attribute');
      //   return true;
      // }
    }
    return false;
  }
  create() {

    let payload = this.createPayload()
    if (this.checkDuplicateAttrVariant()) {
      return;
    }

    this.spinner.show();
    this.variantsService.create(payload).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.reset();
      this.getAll();
      // this.router.navigate(["default/variant/variant-list"]);
    });
  }

  update() {
    let payload = this.createPayload()
    this.spinner.show();
    this.variantsService.update(payload.id, payload).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.getAll();
      this.reset();
    });
  }
  getDataById(id) {
    this.spinner.show();
    this.variantsService.getById(id).subscribe((success: any) => {
      this.variantForm.patchValue(success);
      this.spinner.hide();
    });
  }
  delete(id) {
    this.spinner.show();
    this.variantsService.delete(id).subscribe((success: any) => {
      this.getAll()
      this.spinner.hide();
    });
  }

  back() {
    this.router.navigate(["default/product/product-list"]);
  }
  reset() {
    this.attributes = this.attributes.map(x => {
      x.selectedValue = null
      return x;
    })
    this.f['price'].setValue(null);
    this.f['sku'].setValue(null);
    this.f['qty'].setValue(null);
    this.f['id'].setValue(null);
    this.f['description'].setValue(null);
  }
  openUrl(url) {
    window.open(url, "_blank");
  }

  variantEvent(data: { action: string, data: any }) {
    switch (data.action) {
      case "EDIT":
        if (data.data.id) {
          for (const item of data.data.variantWithAttrVariantMap) {
            for (let at of this.attributes) {
              if (at.attrId == item.attributeId) {
                at.selectedValue = item.value;
                break;
              }
            }
          }
        }
        this.variantForm.patchValue(data.data);
        break;
      case "DELETE":
        this.delete(data.data.id)
        break;
      default:
        break;
    }
  }
}
