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
  ) {}
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
  submit() {
    console.log(this.variantForm.value);

    // this.submitted = true;
    // if (
    //   this.validationService.checkErrors(this.categoryForm, this.FORM_ERRORS)
    // ) {
    //   return;
    // }

    let formData: any = this.variantForm.value;
    // console.log("this.selectedAttr",this.selectedAttr);

    formData.attributeArr = this.variantList;

    if (this.variantList.id) {
      // this.update(this.variantList.id, this.variantList);
    } else {
      // formData.delete('id')
      delete formData.id;
      this.create(formData);
    }
  }
  add() {
    let formData: any = this.variantForm.value;
    formData.attributeArr = JSON.parse(JSON.stringify(this.selectedAttr));
    // if(this.checkDuplicateAttrVariant(formData.attributeArr)){
    // return  this.toastService.error('Duplicate entry');
    // }
    // this.variantList.push(formData);
    console.log("this.variantList", this.variantList);
    this.create(formData);
  
  }
  checkDuplicateAttrVariant(attributeArr = []) {
    let isDuplicate = false;
    for (const item of this.variantList) {
      if (
        item.attributeArr &&
        item.attributeArr.every((x) =>
          attributeArr.some((y) => x.value == y.value)
        )
      ) {
        isDuplicate = true;
      }
    }
    return isDuplicate;
  }
  create(formData) {
    // console.log("formData",formData);
    // return
    this.spinner.show();
    this.variantsService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.reset();
      this.getAll();
      // this.router.navigate(["default/variant/variant-list"]);
    });
  }

  update() {
    let formData: any = this.variantForm.value;
    let id = formData.id;
    this.spinner.show();
    this.variantsService.update(id, formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.getAll();
      this. reset();
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
    let attributeCopy=structuredClone(this.attributes)
    this.attributes=[]
    this.attributes=[...attributeCopy]
    this.f['price'].setValue(null);
    this.f['sku'].setValue(null);
    this.f['qty'].setValue(null);
    this.f['id'].setValue(null);
    this.isEdit=false;
    // if (this.productId) {
    //   this.getProductAttribute(this.productId);
    // }
  }
  openUrl(url) {
    window.open(url, "_blank");
  }
  onAttrChange(ev: any, at: any) {
    console.log("ev", ev.target.value, "id", at);
    let index = this.selectedAttr.findIndex((x) => x.attrId == at.value);
    if (index == -1) {
      this.selectedAttr.push({
        value: ev.target.value,
        attrId: at.value,
        label: at.label,
      });
    } else {
      this.selectedAttr[index] = {
        value: ev.target.value,
        attrId: at.value,
        label: at.label,
      };
    }
    console.log("this.selectedAttr", this.selectedAttr);
  }
  variantEvent(data: {action:string,data:any}) {
    console.log("datadata", data);

    switch (data.action) {
      case "EDIT":
        this.isEdit = true;
        this.variantForm.patchValue(data.data);
        // this.getDataById(data.id);
        break;
      case "DELETE":
        // this.variantList = this.variantList.filter((x) => x.id !== data.id);
        this.delete(data.data.id)
        break;

      default:
        break;
    }
  }
}
