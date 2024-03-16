import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { FormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { InvoiceService } from "@shared/services/invoice.service";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerModelComponent } from "../../../model/customer-model/customer-model.component";
import { ProductModelComponent } from "src/app/model/product-model/product-model.component";
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { mergeMap, of } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { IInvoiceDetails } from "@shared/interface/product-invoice.interface";
import { ValidationService } from "@core/components";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  page: number = 1;
  pageSize: number = 5;
  collection: number = 0;
  customerOption: any = [];
  coupons: any = [];
  offers: any = [];
  saleProducts: any = [];
  productDetails: IInvoiceDetails[] = [];
  paymentOptions: any = [
    {
      label: "Cash",
      value: "Cash",
    },
    {
      label: "UPI",
      value: "UPI",
    },
  ];
  submitted: boolean = false;
  isPreview: boolean = false;
  action: any = "create";
  constructor(
    private location: Location,
    private modelService: NgbModal,
    private service: InvoiceService,
    private validationService: ValidationService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private toastService: ToastrService
  ) {}
  form = new FormGroup({
    _id: new UntypedFormControl(null),
    invoiceNo: new UntypedFormControl(null),
    customerId: new UntypedFormControl(null, [Validators.required]),
    customerName: new UntypedFormControl(null),
    mobile: new UntypedFormControl(null),
    whatsUp: new UntypedFormControl(null),
    email: new UntypedFormControl(null),
    productDetails: new FormGroup([]),
    gst: new UntypedFormControl(0),
    lineValue: new UntypedFormControl(0),
    totalPrice: new UntypedFormControl(0),
    coupon_offersAmount: new UntypedFormControl(0),
    netValue: new UntypedFormControl(0),
    netPPV: new UntypedFormControl(0),
    paymentType: new UntypedFormControl("Cash"),
  });

  get f() {
    return this.form.controls;
  }
  FORM_ERRORS = [
    {
      message: "Customer is required",
      key: "customerId",
    },
    {
      message: "Net Value is required",
      key: "netValue",
    },
  ];
  ngOnInit(): void {
    this.getInitialData();
  }

  openCustomerModel() {
    const modelRef = this.modelService.open(CustomerModelComponent, {
      size: "xl",
    });
    modelRef.result.then(
      (data) => {
        if (data && data._id) {
          this.getInitialData(data);
        }
      },
      (reason) => {}
    );
  }

  openProductModel() {
    const modalRef = this.modelService.open(ProductModelComponent, {
      size: "xl",
    });
    modalRef.componentInstance.saleProducts = this.saleProducts;
    modalRef.componentInstance.matchingProducts = this.productDetails;
    modalRef.result.then(
      (success: any) => {
        success.forEach((ele: any) => {
          let exist = this.productDetails.some((x: any) => {
            return ele._id === x._id;
          });
          if (!exist) {
            this.productDetails.push(ele);
          }
        });
        this.collection = this.productDetails?.length;
      },
      (reason: any) => {}
    );
  }

  getInitialData(data = null) {
    this.service.getAllMasterData({}).subscribe((success: any) => {
      this.f["invoiceNo"].setValue(success.invoiceNo);
      this.customerOption = success.customers;
      this.coupons = success.coupons.map((c) => {
        c.isApply = false;
        return c;
      });
      this.offers = success.offers;
      if (data) {
        this.f["customerId"].setValue(data._id);
        this.f["customerName"].setValue(data.customerName);
        this.f["whatsUp"].setValue(data.whatsUp);
        this.f["mobile"].setValue(data.mobile);
        this.f["email"].setValue(data.email);
      }
      this.saleProducts = success.saleProducts;
      this.actRoute.queryParams
        .pipe(
          mergeMap((params: any) => {
            this.action = params.action;
            if (params.id) {
              return this.service.getById(params.id);
            } else {
              return of({});
            }
          })
        )
        .subscribe((success: any) => {
          if (success.productDetails) {
            this.productDetails = success.productDetails;
            this.collection = this.productDetails?.length;
          }
          this.form.patchValue(success);
        });
    });
  }
  openModel(content) {
    this.modelService
      .open(content, { ariaLabelledBy: "modal-basic-title", size: "lg" })
      .result.then(
        (result) => {
          console.log("`Closed with: ${result}`", `Closed with: ${result}`);
        },
        (reason) => {
          console.log(`Dismissed ${this.getDismissReason(reason)}`);
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  setCustomerInfo(e: any) {
    this.f["customerId"].setValue(e._id);
    this.f["customerName"].setValue(e.customerName);
    this.f["whatsUp"].setValue(e.whatsUp);
    this.f["mobile"].setValue(e.mobile);
    this.f["email"].setValue(e.email);
  }

  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    // this.getAll();
  }
  lineValueRate(element: IInvoiceDetails) {
    let index = this.productDetails
      .map((x) => x.productId)
      .indexOf(element.productId);
    let balanceQuantity = this.saleProducts.find(
      (x) => x.productId === element.productId
    )?.balanceQuantity;

    if (balanceQuantity < element.quantity) {
      this.toastService.warning(
        "Enter quantity is greater quantity than balanced quantity"
      );
      // this.productDetails[index].quantity = Number((0).toFixed(2));
      // this.productDetails[index].lineValue = Number((0).toFixed(2));
      // return;
    }
    this.productDetails[index].lineValue = Number(
      (element.quantity * element.salePrice).toFixed(2)
    );
    this.productDetails[index].PPV = Number(
      (
        element.quantity * element.salePrice -
        element.quantity * element.purchaseRate
      ).toFixed(2)
    );
    this.productDetails[index].totalValue =
      this.productDetails[index].lineValue +
      this.productDetails[index].lineValue * 0;
    // (this.productDetails[index].gst / 100);
    this.productDetails[index].appliedGst = 0;
    // this.productDetails[index].lineValue *
    // (this.productDetails[index].gst / 100);
    this.setNetValue();
  }

  setNetValue() {
    this.f["lineValue"].setValue(
      +this.productDetails
        .reduce((pre: any, cur: any) => pre + cur.lineValue, 0)
        .toFixed(2)
    );
    this.f["netPPV"].setValue(
      +this.productDetails
        .reduce((pre: any, cur: any) => pre + cur.PPV, 0)
        .toFixed(2)
    );
    this.f["gst"].setValue(
      +this.productDetails
        .reduce((pre: any, curr: any) => pre + curr.appliedGst, 0)
        .toFixed(2)
    );
    this.f["totalPrice"].setValue(
      this.productDetails
        .reduce((pre: any, curr: any) => pre + curr.totalValue, 0)
        .toFixed(2)
    );
    this.f["netValue"].setValue(
      +this.f["lineValue"].value +
        +this.f["gst"].value -
        +this.f["coupon_offersAmount"].value
    );
  }

  resetForm() {
    this.form.reset();
    this.getInitialData();
  }
  preview() {
    this.productDetails = this.productDetails.filter((x) => x.quantity > 0);
    this.isPreview = true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.validationService.checkErrors(this.form, this.FORM_ERRORS)) {
      return;
    }
    let formData = this.form.value;
    formData.productDetails = this.productDetails;
    if (formData._id) {
      this.update(formData._id, formData);
    } else {
      delete formData._id;
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.service.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.router.navigate(["/default/invoice/list"]);
    });
  }
  update(id, formData) {
    this.spinner.show();
    this.service.updateById(id, formData).subscribe((success: any) => {
      this.spinner.hide();
      this.router.navigate(["/default/invoice/list"]);
    });
  }

  back() {
    this.location.back();
  }
  applyCoupon() {
    this.modelService.dismissAll();
  }
  applyDiscount(e: any) {
    this.f["netValue"].setValue(this.f["lineValue"].value - e.target.value);
  }
}
