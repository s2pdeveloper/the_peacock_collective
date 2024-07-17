import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ValidationService } from "@core/components";
import { UserService } from "@shared/services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-changepwd",
    templateUrl: "./changepwd.component.html",
    styleUrls: ["./changepwd.component.scss"],
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export default class ChangepwdComponent implements OnInit {
    message = "Please enter valid Password";
    setPasswordForm: FormGroup;
    Show: string = "password";
    show: string = "password";
    visible: string = "password";
    submitted = false;
    user: any;
    changePassword: boolean = false;
    fieldTextType: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private validationService: ValidationService,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private toastr: ToastrService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) { }
    validators = {
        password: {
            'required': 'Password is required',
        },
        confirmPassword: {
            'required': 'Confirm password is required',
            'mustMatch': 'Confirm password is not matched'
        },

    };

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            if (params.userId && params?.pin) {
                this.changePassword = true;
                this.user = params;
            }
        });
        this.setPwdForm();
    }

    get f() {
        return this.setPasswordForm.controls;
    }

    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }


    setPwdForm(): void {
        this.setPasswordForm = this.formBuilder.group(
            {
                id: new FormControl(this.user?.userId ? this.user?.userId : ''),
                resetPin: new FormControl(this.user?.pin ? this.user?.pin : ''),
                password: new FormControl("", [
                    Validators.required,
                    // Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,25})$"),
                ]),
                confirmPassword: new FormControl("", [Validators.required]),
            },
            {
                validator: this.validationService.MustMatch("password", "confirmPassword"),
            }
        );
    }
    password_show() {
        this.Show = "text";
    }
    password_hide() {
        this.Show = "password";
    }
    password_display() {
        this.show = "text";
    }
    password_hiden() {
        this.show = "password";
    }
    password_visible() {
        this.visible = "text";
    }
    password_disable() {
        this.visible = "password";
    }
    formError(field: string) {
        let error = '';
        if (this.f[field]?.errors && this.submitted && (this.f[field].dirty || this.f[field].touched)) {
            let key = Object.keys(this.f[field].errors)[0];
            error = this.validators[field][key];
        }
        console.log("error", error);
        return error;
    }

    setPass() {

        // this.submitted = true;
        // if (this.setPasswordForm.invalid) {
        //     validateField(this.setPasswordForm);
        //     return
        // }

        // this.spinner.show();
        // this.userService.setPassword(this.setPasswordForm.value).subscribe(
        //     (success: any) => {
        //         this.toastr.success('Password reset successfully');
        //         this.submitted = false;
        //         this.spinner.hide();
        //         this.router.navigate(["/auth/login"]);

        //     }
        // );
    }
}
