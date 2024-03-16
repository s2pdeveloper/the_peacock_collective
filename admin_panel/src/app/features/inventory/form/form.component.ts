import { Component } from "@angular/core";
import { Location } from "@angular/common";
import {
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ValidationService } from "@core/components";
import { SpinnerService, ToastService } from "@core/services";
import { InventoryService } from "@shared/services/inventory.service";
import { mergeMap, of } from "rxjs";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  categoryOptions: any = [];
  productDetails: any = [];
  masterDataProducts: any = [];
  submitted: boolean = false;
  isPreview: boolean = false;
  action: any = "create";
  search: string = "";
  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private inventoryService: InventoryService,
    private spinner: SpinnerService,
    private toastService: ToastService,
    private validationService: ValidationService
  ) {}
  form = new UntypedFormGroup({
    _id: new UntypedFormControl(null),
    category: new UntypedFormControl(""),
    batchNumber: new UntypedFormControl("", [Validators.required]),
    batchName: new UntypedFormControl(""),
    vendorName: new UntypedFormControl("", [Validators.required]),
    batchDate: new UntypedFormControl(new Date().toISOString().split("T")[0], [
      Validators.required,
    ]),
    currency: new UntypedFormControl("INR"),
    deliveryLocation: new UntypedFormControl(""),
    transporter: new UntypedFormControl(""),
    deliveryDate: new UntypedFormControl(""),
    productDetails: new FormGroup([]),
    totalPrice: new UntypedFormControl(0),
    cartingPrice: new UntypedFormControl(0),
    otherPrice: new UntypedFormControl(0),
    netValue: new UntypedFormControl(0, [Validators.required]),
    status: new UntypedFormControl("Generated"),
  });
  get f() {
    return this.form.controls;
  }

  FORM_ERRORS = [
    {
      message: "Batch Number is required",
      key: "batchNumber",
    },
    {
      message: "Vendor Name is required",
      key: "vendorName",
    },
    {
      message: "Batch Date is required",
      key: "categoryId",
    },
    {
      message: "Net Value is required",
      key: "netValue",
    },
  ];
  back() {
    this.location.back();
  }
  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    // this.getAll();
  }
  ngOnInit(): void {
    this.getInitialData();
  }

  onSubmit() {
    this.submitted = true;
    if (this.validationService.checkErrors(this.form, this.FORM_ERRORS)) {
      return;
    }
    let productData: any = this.form.value;
    productData.productDetails = this.productDetails;
    if (productData.productDetails.length === 0) {
      this.toastService.error("At least one product is required");
      return;
    }
    if (productData._id) {
      this.update(productData._id, productData);
    } else {
      delete productData._id;
      this.create(productData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.inventoryService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/inventory/list"]);
    });
  }

  update(_id, formData) {
    this.spinner.show();
    this.inventoryService
      .updateById(_id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["default/inventory/list"]);
      });
  }
  resetForm() {
    this.form.reset();
    this.isPreview = false;
    this.productDetails = [];
    this.collection = this.productDetails.length;
    this.getInitialData();
  }

  getInitialData() {
    this.spinner.show();
    this.inventoryService.getAllMasterData({}).subscribe((success: any) => {
      this.categoryOptions = success.categories;
      this.form.controls["batchNumber"].setValue(success.batchNumber);
      this.productDetails = success.products.map((ele: any) => {
        return {
          productId: ele._id,
          productName: ele.name,
          productCode: ele.code,
          quantity: 0,
          standardRate: ele.standardRate,
          purchaseRate: 0,
          lineValue: 0,
        };
      });
      this.masterDataProducts = this.productDetails;
      this.collection = this.productDetails.length;
      this.activatedRoute.queryParams
        .pipe(
          mergeMap((params: any) => {
            this.action = params.action;
            if (params["id"]) {
              return this.inventoryService.getById(params.id);
            } else {
              return of({});
            }
          })
        )
        .subscribe((inventory: any) => {
          this.spinner.hide();
          if (Object.keys(inventory).length == 0) {
            return;
          }
          inventory.batchDate = inventory.batchDate.split("T")[0];
          this.form.patchValue(inventory);
          this.productDetails = inventory.productDetails;
          this.collection = this.productDetails.length;
          // if (this.action != "edit") {
          //     this.form.disable();
          //     if (["approve", "reject", "cancel"].includes(this.action)) {
          //         this.f["remarks"].enable();
          //         this.f["cancellationReason"].enable();
          //     }
          //     this.f["POStatus"].enable();
          // }
        });
    });
  }
  lineValueRate(element: any) {
    let index = this.productDetails
      .map((x: any) => x.productId)
      .indexOf(element.productId);
    this.productDetails[index].lineValue = Number(
      (+element.quantity * +element.purchaseRate).toFixed(2)
    );
    this.f["totalPrice"].setValue(
      this.productDetails
        .map((x: any) => x.lineValue)
        .reduce((acc: number, cur: number) => acc + cur, 0)
        .toFixed(2)
    );

    this.updateNetValue();
  }
  updateNetValue() {
    this.f["netValue"].setValue(
      Number(
        +this.f["totalPrice"].value +
          +this.f["cartingPrice"].value +
          +this.f["otherPrice"].value
      ).toFixed(2)
    );
  }
  preview() {
    this.search = "";
    this.page = 1;
    this.productDetails = this.productDetails.filter(
      (x: any) => x.quantity > 0
    );
    if (this.productDetails.length > 0) {
      this.isPreview = true;
    } else {
      this.toastService.warning("At least One Row is Required");
      this.isPreview = false;
    }
    this.collection = this.productDetails.length;
  }

  addProduct() {
    for (const ele of this.masterDataProducts) {
      let exist = this.productDetails.some((x: any) => {
        return ele.productId === x.productId;
      });
      
      if (!exist) {
        this.productDetails.push(ele);
      }
    }
  }
}
