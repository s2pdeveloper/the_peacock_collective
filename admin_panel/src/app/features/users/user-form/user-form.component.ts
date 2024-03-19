import { Component } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "@shared/services/user.service";
import { SpinnerService, ToastService } from "@core/services";
import { ValidationService } from "@core/components";
import userRole from "../../../type/enum";
@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
})
export class UserFormComponent {
  submitted: boolean = false;
  userId: string = null;
  userRole = userRole;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private activated: ActivatedRoute,
    private userService: UserService,
    private toastService: ToastService
  ) {}

  userForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    role: new FormControl(null),
    mobile: new FormControl(null),
    password: new FormControl(null, [Validators.required]),
  });
  get f() {
    return this.userForm.controls;
  }
  FORM_ERRORS = [
    {
      message: "Name is Required",
      key: "name",
    },
    {
      message: "Email is Required",
      key: "email",
    },
    // {
    //   message: "Role is Required",
    //   key: "role",
    // },
    {
      message: "Password is Required",
      key: "password",
    },
    {
      message: "Mobile No..0 is Required",
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
    if (this.validationService.checkErrors(this.userForm, this.FORM_ERRORS)) {
      return;
    }

    let formData: any = this.userForm.value;
    if (formData.id) {
      this.update(formData);
    } else {
      delete formData.id;
      this.create(formData);
    }
  }
  create(formData) {
    this.spinner.show();
    this.userService.createUser(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/user/user-list"]);
    });
  }
  update(formData) {
    this.spinner.show();
    this.userService.update(formData.id ,formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["/default/user/user-list"]);
    });
  }
  getDataById(id: string) {
    this.spinner.show();
    this.userService.getById({ id: id }).subscribe((success: any) => {
      this.userForm.patchValue(success);
      this.userForm.controls["password"].setValidators(null);
      this.userForm.controls["password"].updateValueAndValidity();
      this.spinner.hide();
    });
  }
  reset() {
    this.userForm.reset();
    if (this.userId) {
      this.getDataById(this.userId);
    }
  }
}
