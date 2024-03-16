import { Component } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ExpensesService } from "@shared/services/expenses.service";
import { SpinnerService, ToastService } from "@core/services";
import { ValidationService } from "@core/components";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private activated: ActivatedRoute,
    private service: ExpensesService,
    private toastService: ToastService
  ) {}

  expenseForm = new FormGroup({
    _id: new FormControl(null),
    date: new FormControl(new Date().toISOString().split("T")[0], [
      Validators.required,
    ]),
    amount: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });
  get f() {
    return this.expenseForm.controls;
  }
  FORM_ERRORS = [
    {
      message: "Date is Required",
      key: "date",
    },
    {
      message: "Amount is Required",
      key: "amount",
    },
  ];
  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id != undefined) {
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
      this.validationService.checkErrors(this.expenseForm, this.FORM_ERRORS)
    ) {
      return;
    }

    let formData: any = this.expenseForm.value;
    if (formData._id) {
      this.update(formData);
    } else {
      delete formData._id;
      this.create(formData);
    }
  }
  create(formData) {
    this.spinner.show();
    this.service.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/expenses/list"]);
    });
  }
  update(formData) {
    this.spinner.show();
    this.service
      .updateById(formData._id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["/default/expenses/list"]);
      });
  }
  getDataById(id: string) {
    this.spinner.show();
    this.service.getById(id).subscribe((success: any) => {
      if (success.date) {
        success.date = success.date.split("T")[0];
      }
      this.expenseForm.patchValue(success);
      this.spinner.hide();
    });
  }
  reset() {
    this.expenseForm.reset();
  }
}
