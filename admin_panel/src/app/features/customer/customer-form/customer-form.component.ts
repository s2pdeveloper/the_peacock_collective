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
import { CustomerService } from "@shared/services/customer.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-customer-form",
  templateUrl: "./customer-form.component.html",
})
export class CustomerFormComponent {
  submitted: boolean = false;
  userId: string = null;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private activated: ActivatedRoute,
    private customerService: CustomerService,
    private toastService: ToastService,
    public modelService: NgbModal
  ) {}

  customerForm = new FormGroup({
    _id: new FormControl(null),
    customerName: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [Validators.required]),
    whatsUp: new FormControl(null),
    email: new FormControl(null),
    DOB: new FormControl(null),
    currency: new FormControl("INR"),
    address: new FormGroup({
      line1: new FormControl(null),
      line2: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      country: new FormControl("India"),
      pinCode: new FormControl(null),
    }),
    anniversaryDate: new FormControl(null),
  });
  get f() {
    return this.customerForm.controls;
  }
  FORM_ERRORS = [
    {
      message: "Name is Required",
      key: "customerName",
    },
    {
      message: "Mobile is Required",
      key: "mobile",
    },
  ];
  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id != undefined) {
        this.userId = params.id;
        this.getDataById(params.id);
      }
    });
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  submit() {
    this.submitted = true;
    if (
      this.validationService.checkErrors(this.customerForm, this.FORM_ERRORS)
    ) {
      return;
    }

    let formData: any = this.customerForm.value;
    formData.role = "Admin";
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
    this.customerService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/customer/customer-list"]);
    });
  }
  update(formData) {
    this.spinner.show();
    this.customerService
      .update(formData._id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["/default/customer/customer-list"]);
      });
  }
  getDataById(id: string) {
    this.spinner.show();
    this.customerService.getById(id).subscribe((success: any) => {
      this.customerForm.patchValue(success);
      this.spinner.hide();
    });
  }
  reset() {
    this.customerForm.reset();
    if (this.userId) {
      this.getDataById(this.userId);
    }
  }
}
